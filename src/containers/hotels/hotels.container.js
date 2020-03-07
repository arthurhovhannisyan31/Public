// external libraries
import React, {useEffect, useState} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
// local services & data store
import {HOTELS_REQUEST, moduleName as hotelModuleName} from './hotels.reducer'
// local containers & components
import HotelsFilter from '../../components/ui/hotels/hotels-filter'
import HotelsLazyList from '../../components/ui/hotels/hotels-lazy-list'
// local constants & styles
import './hotels.styles.scss'

const Hotels = () => {
  /** Declare dispatch method and component methods */
  const dispatch = useDispatch()

  /**
   * Returns HOTELS_REQUEST action with params
   * @param id
   * @param length
   * @returns {{length: number, id: number, type: string}}
   */
  const getHotels = ({id, length}) => dispatch({
    type: HOTELS_REQUEST,
    id, length
  })

  /** Declare selectors */
  const {hotels} = useSelector(state => state[hotelModuleName], shallowEqual)
  console.log(hotels)

  const [id, setId] = useState(0)
  console.log(id)
  const [length, setLength] = useState(10)
  console.log(length)

  useEffect(() => {
    getHotels({
      id,
      length
    })
  }, [])


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
