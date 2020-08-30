// external libraries
import { call, put, takeLatest, fork } from 'redux-saga/effects'
// local services & data store
import { getJSONData } from './services'
// local containers & components
// local constants & styles
import {
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_ERROR,
  WEATHER_DATA_SUCCESS,
} from './constants'

export function* workerGetWeatherDataSaga(action) {
  try {
    const { payload } = action
    const data = yield call(getJSONData, { source: payload }) // todo replace with axios call
    yield put({
      type: WEATHER_DATA_SUCCESS,
      payload: data,
    })
  } catch (e) {
    yield put({
      type: WEATHER_DATA_ERROR,
      payload: e,
    })
  }
}

export function* watcherGetWeatherSaga() {
  yield takeLatest(WEATHER_DATA_REQUEST, workerGetWeatherDataSaga)
}

export const weatherSagas = [fork(watcherGetWeatherSaga)]
