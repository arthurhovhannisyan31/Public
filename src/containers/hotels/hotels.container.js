// external libraries
import React, {useCallback, useEffect, useRef, useState} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
// local services & data store
import {HOTELS_REQUEST, moduleName as hotelModuleName} from './hotels.reducer'
import {useDebounce, useOnScreen} from "../../services/utilities.service"
// local containers & components
import {HotelsFilter, HotelsLazyList} from '../../components/ui/hotels'
// local constants & styles
import './hotels.styles.scss'

const Hotels = () => {
  /**
   * Declare component state
   */
  const [id, setId] = useState(0)
  const debouncedId = useDebounce(id, 500)
  const [length, setLength] = useState(10)
  const debouncedLength = useDebounce(length, 500)
  const [filterValue, setFilterValue] = useState(null)

  /** Declare dispatch method and component methods */
  const dispatch = useDispatch()

  /**
   * Returns HOTELS_REQUEST action with params
   * @param id
   * @param length
   * @returns {{length: number, id: number, type: string}}
   */
    // eslint-disable-next-line no-shadow
  const getHotels = useCallback(({id, length}) => dispatch({
    type: HOTELS_REQUEST,
    id, length
  }), [dispatch])

  /** Declare selectors */
  const {
    loading,
    hotelsCollection
  } = useSelector(
    state => state[hotelModuleName], shallowEqual
  )

  /**
   * Calling getHotels any time debounced input changed
   */
  useEffect(() => {
    getHotels({
      id: debouncedId,
      length: debouncedLength,
      collection: hotelsCollection
    })
  }, [debouncedId, debouncedLength, getHotels])

  /**
   * Declaring react ref object
   * intersecting - using IntersectionObserver API for detection if element in view port
   * @type {any}
   */
  const ref = useRef(null)
  // call new list fetching before last 100px, lets not make people wait too long
  const intersecting = useOnScreen(ref, null,'0px')

  useEffect(() => {
    if (intersecting){
      setId(id+length)
    }
    // scroll page on adding new lines
  }, [intersecting])

  /**
   * hotelUniqValues - getting uniq values through the Set
   * hotelOptions - options array for select component
   * filterValues - array of filter value options single or plural
   * lazyListFilteredData - array of filtered hotelOptions for lazy list component
   * @type {Set<*>}
   */
  const hotelUniqValues = new Set([...hotelsCollection.map(el => el.region)])
  const hotelOptions = [...hotelUniqValues].map(el => ({ value: el, label: el }))
  // eslint-disable-next-line no-nested-ternary
  const filterValues = Array.isArray(filterValue)
    ? filterValue.map(el => el.value)
    : ( filterValue?.value ? [filterValue.value] : [])
  const lazyListFilteredData = hotelsCollection.filter(el => {
    return filterValues?.length ?  filterValues.includes(el.region) : el
  })

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
