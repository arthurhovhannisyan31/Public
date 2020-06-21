// external libraries
import { Map, Record } from 'immutable'
// local services & data store
// local containers & components
// local constants & styles
import {
  HOTELS_REQUEST,
  HOTELS_REQUEST_EMPTY,
  HOTELS_REQUEST_ERROR,
  HOTELS_REQUEST_SUCCESS
} from './constants'

/**
 * Initial state
 * @type {Record.Factory<{error: boolean, loading: boolean}>}
 */
const InitialStateRecord = Record({
  error: false,
  loading: false,
  nextPortion: [],
  hotelsCollection: new Map([]),
  nextId: 0,
  finita: false,
  firstLoad: true
})

/**
 * Hotels reducer
 * @param state
 * @param action
 * @returns {(Record<{error: boolean, loading: boolean}> & Readonly<{error: boolean, loading: boolean}>)|any}
 */
const hotelsReducer = (state = new InitialStateRecord(), action) => {
  const { type, payload, nextId } = action
  switch (type) {
    case HOTELS_REQUEST:
      return state.set('loading', true)
        .set('error', false)
    case HOTELS_REQUEST_ERROR:
      return state.set('loading', false)
        .set('error', payload)
    case HOTELS_REQUEST_SUCCESS:
      return state
        .set('loading', false)
        .set('nextId', nextId)
        .set('firstLoad', false)
        .updateIn(['hotelsCollection'], (collection) => [
          ...collection,
          ...payload
        ])
    case HOTELS_REQUEST_EMPTY:
      return state.set('finita', true)
    default:
      return state
  }
}

export default hotelsReducer
