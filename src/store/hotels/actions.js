// external libraries
// local services & data store
// local containers & components
// local constants & styles
import { HOTELS_REQUEST } from './constants'

export const getHotelsAction = ({ id, length, firstLoad }) => ({
  type: HOTELS_REQUEST,
  id,
  length,
  firstLoad
})

export const getTripsAction = () => ({})
