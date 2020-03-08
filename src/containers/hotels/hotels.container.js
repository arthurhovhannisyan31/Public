// external libraries
import React, {useCallback, useEffect, useMemo, useReducer, useRef} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {createSelector} from "reselect"
// local services & data store
import {HOTELS_REQUEST, moduleName as hotelModuleName} from './hotels.reducer'
import {useDebounce, useOnScreen} from "../../services/utilities.service"
// local containers & components
import {HotelsFilter, HotelsLazyList} from '../../components/ui/hotels'
// local constants & styles
import './hotels.styles.scss'

const hotelReducer = (state, action) => {
  const {type, payload} = action
  switch (type) {
    case 'setId':
      return {
        ...state,
        id: payload
      }
    case 'setLength':
      return {
        ...state,
        length: payload
      }
    case 'setFilterValue':
      return {
        ...state,
        filterValue: payload
      }
    case 'setFirstLoad':
      return {
        ...state,
        firstLoad: payload
      }
    default:
      return state
  }
}

const Hotels = () => {
  /**
   * Declare initial state
   * @type {{filterValue: null, length: number, id: number}}
   */
  const hotelInitialState = {
    id: 0,
    length: 10,
    filterValue: null,
    firstLoad: true,
    loadMore: false,
  }

  /**
   * Declare dispatch method and component methods
   * @param payload
   * @returns {*}
   */
  const dispatchGlobal = useDispatch()
  const [stateLocal, dispatchLocal] = useReducer(hotelReducer, hotelInitialState)
  const setId = payload => dispatchLocal({type: 'setId', payload})
  const setLength = payload => dispatchLocal({type: 'setLength', payload})
  const setFilterValue = payload => dispatchLocal({type: 'setFilterValue', payload})
  const setFirstLoad = payload => dispatchLocal({type: 'setFirstLoad', payload})

  /**
   * Declare component state
   */
  const {id, length, filterValue, firstLoad} = stateLocal

  const debouncedId = useDebounce(id, 500)
  const debouncedLength = useDebounce(length, 500)

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
   * Declare selectors
   * */
  const { loading, finita } = useSelector(state => state[hotelModuleName], shallowEqual)
  const { hotelsCurrentGap } = useSelector(state => state[hotelModuleName])

  const hotelUniqValuesSelector = createSelector(
    state => state[hotelModuleName].hotelsCollection,
    collection => [...collection].map(el => el.region)
  )
  const hotelValues = useSelector(hotelUniqValuesSelector)
  const hotelUniqValues = new Set([...hotelValues])

  const hotelOptions = [...hotelUniqValues].map(el => ({ value: el, label: el }))
  // eslint-disable-next-line no-nested-ternary
  const filterValues = Array.isArray(filterValue)
    ? filterValue.map(el => el.value)
    : ( filterValue?.value ? [filterValue.value] : [])

  const hotelLazyListSelector = createSelector(
    state => state[hotelModuleName].hotelsCollection,
    collection => collection.filter(el =>
      filterValues?.length ?  filterValues.includes(el.region) : el
    )
  )
  const lazyListFilteredData = useSelector(hotelLazyListSelector)

  /**
   * Calling getHotels any time debounced input changed
   */
  useEffect(() => {
    if (!finita && !loading && !hotelsCurrentGap?.length){
      getHotels({
        id: debouncedId,
        length: debouncedLength,
        firstLoad
      })
    }
  }, [getHotels, debouncedId, debouncedLength, finita])

  useEffect(() => {
    if (firstLoad) setFirstLoad(false)
  }, [firstLoad])

  /**
   * hotelUniqValues - getting uniq values through the Set
   * hotelOptions - options array for select component
   * filterValues - array of filter value options single or plural
   * lazyListFilteredData - array of filtered hotelOptions for lazy list component
   * @type {any}
   */
  /**
   * Declaring react ref object
   * intersecting - using IntersectionObserver API for detection if element in view port
   * @type {any}
   */
  const ref = useRef(null)
  // call new list fetching before last 100px, lets not make people wait too long
  const intersecting = useOnScreen(ref, null,'0px')
  const incrementId = useMemo(() => (id+length), [id, length])

  /**
   * Run effect when last item still in view port
   * and data fetching is nor over
   * Loading restarts the check when toggles
   */
  useEffect(() => {
    if (intersecting && !finita){
      setId(incrementId)
    }
  }, [intersecting, finita])

  return (
    <div
      className="hotels"
    >
      <HotelsFilter
        id={id}
        setId={setId}
        length={length}
        setLength={setLength}
        options={hotelOptions}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <br/>
      <HotelsLazyList
        loading={loading}
        data={[...lazyListFilteredData]}
        ref={ref}
      />
    </div>
  )
}

export default Hotels
