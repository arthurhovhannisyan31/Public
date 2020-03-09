// external libraries
import React, { useCallback, useEffect, useReducer, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
// local services & data store
import { HOTELS_REQUEST, moduleName as hotelModuleName } from './hotels.reducer'
import { useDebounce, useOnScreen } from '../../services/utilities.service'
// local containers & components
import { HotelsFilter, HotelsLazyList } from '../../components/ui/hotels'
// local constants & styles
import './hotels.styles.scss'

/**
 * Declaring local reducer function
 * @param state
 * @param action
 * @returns {{filters: *}|{length: *}|{loadMore: *}|*}
 */
const hotelReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'setLength':
      return { ...state, length: payload }
    case 'setFilters':
      return { ...state, filters: payload }
    case 'setLoadMore':
      return { ...state, loadMore: payload }
    default:
      return state
  }
}

const Hotels = () => {
  /**
   * Declare initial state
   * @type {{loadMore: boolean, length: number, filters: null}}
   */
  const hotelInitialState = {
    length: 10,
    filters: null,
    loadMore: false,
  }

  /**
   * Declare methods
   */
  const dispatchGlobal = useDispatch()
  const [stateLocal, dispatchLocal] = useReducer(
    hotelReducer,
    hotelInitialState
  )
  const setLength = payload => dispatchLocal({ type: 'setLength', payload })
  const setFilters = payload => dispatchLocal({ type: 'setFilters', payload })
  const setLoadMore = payload => dispatchLocal({ type: 'setLoadMore', payload })

  /**
   * Declare state
   */
  const { length, filters, loadMore } = stateLocal
  const debouncedLength = useDebounce(length, 500)

  /**
   * Declare selectors
   * hotelValues - filtered array for lazy-list component
   * hotelUniqValues - getting uniq values through the Set
   * hotelOptions - options array for select component
   * filterValues - array of filter value options single or plural {}/[{}]
   * lazyListFilteredData - array of filtered hotelOptions for lazy list component
   * hotelsCollectionLength - main data array length
   * @type {any}
   */
  const { loading, finita, nextId, firstLoad } = useSelector(
    state => state[hotelModuleName],
    shallowEqual
  )

  const hotelsSelector = (cb, selector) =>
    createSelector(state => state[hotelModuleName][selector], cb)
  const hotelValues = useSelector(
    hotelsSelector(data => data.map(el => el.region), 'hotelsCollection')
  )
  const hotelUniqValues = new Set([...hotelValues])

  const hotelOptions = [...hotelUniqValues].map(el => ({
    value: el,
    label: el,
  }))

  const filterValues = () => {
    if (Array.isArray(filters)) {
      return filters.map(el => el.value)
    }
    return filters?.value ? [filters.value] : []
  }

  // При выборе элемента в списке список отфильтровывается по заданному региону
  const lazyListFilteredData = useSelector(
    hotelsSelector(
      data =>
        data.filter(el =>
          filterValues()?.length ? filterValues().includes(el.region) : el
        ),
      'hotelsCollection'
    )
  )

  /**
   * Declaring react ref object
   * intersecting - using IntersectionObserver API for detection if element in view port
   * @type {any}
   */
  const ref = useRef(null)
  /**
   * Running intersection observer
   * @type {boolean}
   */
  const intersecting = useOnScreen(ref, null, '0px')

  /**
   * Returns HOTELS_REQUEST action with params
   * @param id
   * @param length
   * @returns {{length: number, id: number, type: string}}
   */

  const getHotels = useCallback(
    ({ id, length, firstLoad }) =>
      dispatchGlobal({
        type: HOTELS_REQUEST,
        id,
        length,
        firstLoad,
      }),
    [dispatchGlobal]
  )

  /**
   * Run effect when reference div in view port
   * and data fetching is nor over
   */
  useEffect(() => {
    if (intersecting && !finita) {
      // Если список отображен пользователю целиком или пользователь доскроливает до конца списка, то запускается дозагрузка следующей порции данных
      // Если на отображаемой части странице еще есть место, то продолжает работать алгоритм дозагрузки данных, иначе следующая порция данных не загружаются
      // Если пользователь снова доскроллил до конца списка, то алгоритм дозагрузки данных запускается снова
      // При выбранном фильтре должен быть сохранен функционал дозагрузки списка
      setLoadMore(true)
    }
  }, [intersecting, finita])

  /**
   * Calling getHotels on first load and any time load more request
   * Data fetching distributed to 2 effects to avoid dependencies conflict
   */
  useEffect(() => {
    if (loadMore || firstLoad) {
      // Асинхронно подгружается первая порция данных (10 строк)
      getHotels({
        id: nextId,
        length: debouncedLength,
        firstLoad,
      })
      setLoadMore(false)
    }
  }, [getHotels, loadMore, debouncedLength, firstLoad, nextId])

  return (
    // На странице отображается компонент
    <div className="hotels">
      {/* Над списком размещен фильтр по региону: select, который пополняется по мере появления новых уникальных регионов в списке */}
      <HotelsFilter
        id={nextId}
        length={length}
        setLength={setLength}
        options={hotelOptions}
        filters={filters}
        setFilters={setFilters}
      />
      {/* Компонент выводит список отелей (это может быть список или таблица), каждый элемент которого отображает всю информацию из модели отеля id name region price */}
      <HotelsLazyList
        loading={loading}
        firstLoad={firstLoad}
        data={[...lazyListFilteredData]}
        ref={ref}
      />
    </div>
  )
}

export default Hotels
