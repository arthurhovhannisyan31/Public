// external libraries
import React, {useCallback, useEffect, useReducer, useRef} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {createSelector} from "reselect"
// local services & data store
import {HOTELS_REQUEST, moduleName as hotelModuleName} from './hotels.reducer'
import {useOnScreen} from "../../services/utilities.service"
// local containers & components
import {HotelsFilter, HotelsLazyList} from '../../components/ui/hotels'
// local constants & styles
import './hotels.styles.scss'

const hotelReducer = (state, action) => {
  const {type, payload} = action
  switch (type) {
    // case 'setId':
    //   return {...state, id: payload}
    // case 'setLength':
    //   return {...state, length: payload}
    case 'setFilterValue':
      return {...state, filterValue: payload}
    case 'setFirstLoad':
      return {...state, firstLoad: payload}
    case 'setLoadMore':
      return {...state, loadMore: payload}
    default:
      return state
  }
}

const Hotels = () => {
  /**
   * Declare initial state
   * @type {{filterValue: null, loadMore: boolean, length: number, id: number, firstLoad: boolean}}
   */
  const hotelInitialState = {
    // id: 0,
    length: 10,
    filterValue: null,
    firstLoad: true,
    loadMore: false,
  }

  /**
   * Declare methods
   */
  const dispatchGlobal = useDispatch()
  const [stateLocal, dispatchLocal] = useReducer(hotelReducer, hotelInitialState)
  // const setId = payload => dispatchLocal({type: 'setId', payload})
  // const setLength = payload => dispatchLocal({type: 'setLength', payload})
  const setFilterValue = payload => dispatchLocal({type: 'setFilterValue', payload})
  const setFirstLoad = payload => dispatchLocal({type: 'setFirstLoad', payload})
  const setLoadMore = payload => dispatchLocal({type: 'setLoadMore', payload})

  /**
   * Declare state
   */
  const {
    // id,
    length, filterValue, firstLoad, loadMore} = stateLocal

  // const debouncedId = useDebounce(id, 500)
  // const debouncedLength = useDebounce(length, 500)

  /**
   * Declare selectors
   * hotelUniqValues - getting uniq values through the Set
   * hotelOptions - options array for select component
   * filterValues - array of filter value options single or plural
   * lazyListFilteredData - array of filtered hotelOptions for lazy list component
   * @type {any}
   */
    // todo move to reducer file
  const { loading, finita, nextId } = useSelector(state => state[hotelModuleName], shallowEqual)

  const hotelsSelector = (cb, selector) => createSelector(
    state => state[hotelModuleName][selector], cb
  )
  const hotelValues = useSelector(hotelsSelector(
    data => data.map(el => el.region),
    'hotelsCollection'
  ))
  const hotelUniqValues = new Set([...hotelValues])

  const hotelOptions = [...hotelUniqValues]
    .map(el => ({ value: el, label: el }))

  // eslint-disable-next-line no-nested-ternary
  const filterValues = Array.isArray(filterValue)
    ? filterValue.map(el => el.value)
    : ( filterValue?.value ? [filterValue.value] : [])

  const lazyListFilteredData = useSelector(hotelsSelector(
    data => data.filter(el =>
      filterValues?.length ?  filterValues.includes(el.region) : el),
    'hotelsCollection'
  ))

  const hotelsCollectionLength = useSelector(hotelsSelector(
    data => data.length,
    'hotelsCollection'
  ))

  /**
   * Declaring react ref object
   * intersecting - using IntersectionObserver API for detection if element in view port
   * @type {any}
   */
  const ref = useRef(null)
  // call new list fetching before last 100px, lets not make people wait too long
  const intersecting = useOnScreen(ref, null,'0px')

  /**
   * Returns HOTELS_REQUEST action with params
   * @param id
   * @param length
   * @returns {{length: number, id: number, type: string}}
   */
    // eslint-disable-next-line no-shadow
  const getHotels = useCallback(({id, length, firstLoad}) => dispatchGlobal({
      type: HOTELS_REQUEST,
      id, length, firstLoad
    }), [dispatchGlobal])

  /**
   * Run effect when last item still in view port
   * and data fetching is nor over
   * Loading restarts the check when toggles
   */
  useEffect(() => {
    console.log('intersecting', intersecting)
    console.log('finita', finita)
    console.log('hotelsCollectionLength', hotelsCollectionLength)
    if (intersecting && !finita){
      setLoadMore(true)
    }
  }, [intersecting, finita, hotelsCollectionLength])

  /**
   * Calling getHotels any time input changes
   */
  useEffect(() => {
    console.log('loadMore', loadMore)
    if (loadMore){
      getHotels({
        id: nextId,
        length,
        firstLoad
      })
      setLoadMore(false)
    }
  }, [getHotels, nextId, length, loadMore])

  /**
   * Set firstLoad to false after first data fetch
   */
  useEffect(() => {
    if (firstLoad) setFirstLoad(false)
  }, [firstLoad])


  return (
    <div className="hotels">
      <HotelsFilter
        id={nextId}
        length={length}
        // setLength={setLength}
        options={hotelOptions}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <HotelsLazyList
        loading={loading}
        data={[...lazyListFilteredData]}
        ref={ref}
      />
    </div>
  )
}

export default Hotels


// todo input for manual set id and manual set length