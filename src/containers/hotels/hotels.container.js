// external libraries
import React, {
  useEffect,
  useReducer,
  useRef,
  useMemo,
  useContext
} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { Helmet } from 'react-helmet'
// local services & data store
import { moduleName as hotelModuleName } from '../../store/hotels/constants'
import { getHotelsAction } from '../../store/hotels/actions'
import { useDebounce, useOnScreen } from '../../services/utilities.service'
import { HelmetContext } from '../../contexts'
// local containers & components
import { HotelsFilter, HotelsLazyList } from '../../components/hotels'
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
      return {
        ...state,
        length: payload,
      }
    case 'setFilters':
      return {
        ...state,
        filters: payload,
      }
    case 'setLoadMore':
      return {
        ...state,
        loadMore: payload,
      }
    case 'setRefPersist':
      return {
        ...state,
        refPersist: payload,
      }
    default:
      return state
  }
}

const Hotels = () => {
  /**
   * Use context props
   * */
  const { title } = useContext(HelmetContext)

  /**
   * Declare initial state
   * @type {{loadMore: boolean, length: number, filters: null}}
   */
  const hotelInitialState = {
    length: 10,
    filters: null,
    loadMore: false,
    refPersist: null
  }

  /**
   * Declare methods
   */
  const dispatchGlobal = useDispatch()
  const [stateLocal, dispatchLocal] = useReducer(
    hotelReducer,
    hotelInitialState,
    undefined
  )

  // In large component trees, an alternative we recommend is to pass down a dispatch function from useReducer via context:

  const setLength = (payload) =>
    dispatchLocal({
      type: 'setLength',
      payload,
    })
  const setFilters = (payload) =>
    dispatchLocal({
      type: 'setFilters',
      payload,
    })
  const setLoadMore = (payload) =>
    dispatchLocal({
      type: 'setLoadMore',
      payload,
    })
  const setRefPersist = (payload) =>
    dispatchLocal({
      type: 'setRefPersist',
      payload,
    })

  /**
   * Declare state
   */
  const { length, filters, loadMore, refPersist } = stateLocal
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
    (state) => state[hotelModuleName],
    shallowEqual
  )

  const hotelsSelector = (selector, cb) =>
    createSelector((state) => state[hotelModuleName][selector], cb)
  const hotelValues = useSelector(
    hotelsSelector('hotelsCollection', (data) => data.map((el) => el.region))
  )
  const hotelUniqValues = new Set([...hotelValues])

  const hotelOptions = useMemo(
    () =>
      [...hotelUniqValues].map((el) => ({
        value: el,
        label: el,
      })),
    [hotelUniqValues]
  )

  const filterValues = () => {
    if (Array.isArray(filters)) {
      return filters.map((el) => el.value)
    }
    return filters?.value ? [filters.value] : []
  }

  const lazyListFilteredData = useSelector(
    hotelsSelector(
      (data) =>
        data.filter((el) =>
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
  useEffect(() => {
    if (ref) setRefPersist(ref)
  }, [ref])
  /**
   * Running intersection observer
   * @type {boolean}
   */

  const intersecting = useOnScreen(refPersist, null, '0px')

  /**
   * Returns HOTELS_REQUEST action with params
   * @param id
   * @param length
   * @returns {{length: number, id: number, type: string}}
   */

  /**
   * Run effect when reference div in view port
   * and data fetching is nor over
   */
  useEffect(() => {
    if (intersecting && !finita) {
      setLoadMore(true)
    }
  }, [intersecting, finita])

  /**
   * Calling getHotels on first load and any time load more request
   * Data fetching distributed to 2 effects to avoid dependencies conflict
   */
  useEffect(() => {
    if (loadMore || firstLoad) {
      dispatchGlobal(
        getHotelsAction({
          id: nextId,
          length: debouncedLength,
          firstLoad,
        })
      )
      setLoadMore(false)
    }
  }, [dispatchGlobal, loadMore, debouncedLength, firstLoad, nextId])

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="hotels">
        <span className="hotels-title">Lazy loading list.</span>
        <HotelsFilter
          id={nextId}
          length={length}
          setLength={setLength}
          options={hotelOptions}
          filters={filters}
          setFilters={setFilters}
        />
        <HotelsLazyList
          loading={loading}
          firstLoad={firstLoad}
          data={[...lazyListFilteredData]}
          ref={ref}
        />
      </div>
    </>
  )
}

export default Hotels
