// external libraries
import axios from 'axios'
// local services & data store
// local containers & components
// local constants & styles

/** Hotels */

/**
 * Returns hotels data
 * { id: integer;
	   name: string(255);
	   region: string(255);
	   price: float;
	 }
 * @returns {Promise<any<T>>}
 */
export const fetchHotels = () => {
// export const fetchHotels = ({id, length}) => {
  return axios.get('http://localhost:3000/hotels_mock.json'
    // in case of real rest api we could pass props to server
    // , {id, length}
  )
}

export const fetchTrips = () => {}
