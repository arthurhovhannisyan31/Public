import axios from 'axios';

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
  return axios.get('http://localhost:3000/hotels_mock.json');
};

export const fetchTrips = () => {};
