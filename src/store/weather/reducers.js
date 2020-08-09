// external libraries
import { Map, Record } from 'immutable'
// local services & data store
// local containers & components
// local constants & styles
import {
  WEATHER_ALL_DATA_REQUEST,
  WEATHER_ALL_DATA_ERROR,
  WEATHER_ALL_DATA_SUCCESS,
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_ERROR,
  WEATHER_DATA_SUCCESS,
  WEATHER_SET_BRUSH_RANGE,
} from './constants'

const InitialStateRecord = Record({
  loading: false,
  error: false,
  data: [],
  allData: new Map(),
  range: [],
})

const weatherReducer = (state = new InitialStateRecord(), action) => {
  const { type, payload, key } = action
  switch (type) {
    case WEATHER_DATA_REQUEST:
    case WEATHER_ALL_DATA_REQUEST: {
      return state.set('loading', true)
    }
    case WEATHER_ALL_DATA_ERROR:
    case WEATHER_DATA_ERROR: {
      return state.set('loading', false).set('error', true)
    }
    case WEATHER_DATA_SUCCESS: {
      return state.set('loading', false).set('data', payload)
    }
    case WEATHER_ALL_DATA_SUCCESS: {
      return state
        .set('loading', false)
        .update('allData', (item) => item.set(key, payload))
    }
    case WEATHER_SET_BRUSH_RANGE: {
      console.log(payload)
      return state.set('range', payload)
    }
    default:
      return state
  }
}

export default weatherReducer
