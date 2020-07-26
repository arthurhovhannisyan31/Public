// external libraries
import { all } from 'redux-saga/effects'
// local services & data store
import { hotelsSagas } from './hotels'
import { weatherSagas } from './weather'
// local containers & components
// local constants & styles

/**
 * root saga for watchers
 * @returns {any}
 */
export default function* rootSaga() {
  yield all([...hotelsSagas, ...weatherSagas])
}
