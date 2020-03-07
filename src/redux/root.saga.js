// external libraries
import {all} from 'redux-saga/effects'
// local services & data store
import hotelSaga from '../containers/hotels/hotels.reducer'
// local containers & components
// local constants & styles

/**
 * root saga for watchers
 * @returns {any}
 */
export default function* rootSaga() {
  yield all([hotelSaga()])
}
