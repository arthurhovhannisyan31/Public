// external libraries
import axios from 'axios'
// local services & data store
import { fetchHotelsRestApiMock } from '../../services/utilities.service'
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
export const fetchHotels = ({ id, length }) => {
  return fetchHotelsRestApiMock(
    axios.get(`my-json-server.typicode.com/arthurhovhannisyan31/demo/hotels`),
    {
      id,
      length
    }
  )
}

export const fetchTrips = () => {
}
