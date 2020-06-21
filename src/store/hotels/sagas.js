// external libraries
import { call, delay, fork, put, takeLatest } from 'redux-saga/effects'
// local services & data store
// local containers & components
// local constants & styles
import {
  HOTELS_REQUEST_SUCCESS,
  HOTELS_REQUEST_ERROR,
  HOTELS_REQUEST_EMPTY,
  HOTELS_REQUEST
} from './constants'

import { fetchHotels } from './services'

/**
 * Returns required hotels range
 * @returns {any}
 */
export function* workerGetHotelsSaga(action) {
  try {
    const { id, length, firstLoad } = action
    if (!firstLoad) yield delay(2500)
    const { data, nextIndex } = yield call(fetchHotels, {
      id,
      length
    })
    if (!data?.length) yield put({ type: HOTELS_REQUEST_EMPTY })
    yield put({
      type: HOTELS_REQUEST_SUCCESS,
      payload: data,
      nextId: nextIndex
    })
    return {
      data,
      nextIndex
    }
  } catch (e) {
    yield put({
      type: HOTELS_REQUEST_ERROR,
      payload: e
    })
    return -1
  }
}

/**
 * Effect watcher
 * @returns {any}
 */
export function* watcherGetHotelsSaga() {
  yield takeLatest(HOTELS_REQUEST, workerGetHotelsSaga)
}

export const hotelsSagas = [fork(watcherGetHotelsSaga)]
