// external libraries
// local services & data store
// local containers & components
// local constants & styles
import {
  WEATHER_DATA_REQUEST,
  WEATHER_ALL_DATA_REQUEST,
  WEATHER_SET_BRUSH_RANGE,
} from './constants'

export const getWeatherDataAction = ({ source }) => ({
  type: WEATHER_DATA_REQUEST,
  payload: source,
})
export const getWeatherAllDataAction = () => ({
  type: WEATHER_ALL_DATA_REQUEST,
})
export const setBrushRange = ({ range }) => ({
  type: WEATHER_SET_BRUSH_RANGE,
  payload: range,
})
