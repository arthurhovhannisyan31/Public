// external libraries
import { Map, Record } from 'immutable'
// local services & data store
// local containers & components
// local constants & styles
import {
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
  const { type, payload } = action
  switch (type) {
    case WEATHER_DATA_REQUEST: {
      return state.set('loading', true)
    }
    case WEATHER_DATA_ERROR: {
      return state.set('loading', false).set('error', true)
    }
    case WEATHER_DATA_SUCCESS: {
      return state.set('loading', false).set('data', payload)
    }

    case WEATHER_SET_BRUSH_RANGE: {
      return state.set('range', payload)
    }
    default:
      return state
  }
}

export default weatherReducer
