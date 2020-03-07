// external libraries
import React, {useCallback, useEffect, useState} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
// local services & data store
import {HOTELS_REQUEST, moduleName as hotelModuleName} from './hotels.reducer'
// local containers & components
import HotelsFilter from '../../components/ui/hotels/hotels-filter'
import HotelsLazyList from '../../components/ui/hotels/hotels-lazy-list'
// local constants & styles
import './hotels.styles.scss'
import {useDebounce} from "../../services/utilities.service"

const Hotels = () => {
  /**
   * Declare component state
   */
  const [id, setId] = useState(11)
  const debouncedId = useDebounce(id, 500)
  const [length, setLength] = useState(10)
  const debouncedLength = useDebounce(length, 500)

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
  const {hotels} = useSelector(state => state[hotelModuleName], shallowEqual)

  useEffect(() => {
    getHotels({
      id: debouncedId,
      length: debouncedLength
    })
  }, [debouncedId, debouncedLength, getHotels])


  return (
    <div className="hotels">
      <HotelsFilter
        id={id}
        setId={setId}
        length={length}
        setLength={setLength}
      />
      <br/>
      <HotelsLazyList
        loading={false}
        data={hotels}
      />
      {/* loading indicator after last element */}
    </div>
  )
}


export default Hotels
