// external libraries
import { call, put, takeLatest, fork } from 'redux-saga/effects'
// local services & data store
import { getAllJSONData, getJSONData } from './services'
// local containers & components
// local constants & styles
import {
  WEATHER_ALL_DATA_REQUEST,
  WEATHER_ALL_DATA_ERROR,
  WEATHER_ALL_DATA_SUCCESS,
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_ERROR,
  WEATHER_DATA_SUCCESS,
  WEATHER_SET_BRUSH_RANGE
} from './constants'

export function* workerGetWeatherDataSaga(action) {
  try {
    const { source } = action
    const data = yield call(getJSONData, { source }) // todo replace with axios call
    yield put({
      type: WEATHER_DATA_SUCCESS,
      payload: data
    })
  } catch (e) {
    yield put({
      type: WEATHER_DATA_ERROR,
      payload: e
    })
  }
}

export function* workerGetWeatherAllDataSaga(action) {
  try {
    const data = yield call(getAllJSONData)
    console.log(data)
    // todo refactor
    // yield put({
    //   type: WEATHER_ALL_DATA_SUCCESS,
    //   payload: value,
    //   key
    // })
    // Object.entries(data).forEach(([key, value]) => {
    // });
  } catch (e) {
    yield put({
      type: WEATHER_ALL_DATA_ERROR,
      payload: e
    })
  }
}

export function* watcherGetWeatherSaga() {
  yield takeLatest(WEATHER_DATA_REQUEST, workerGetWeatherDataSaga)
  yield takeLatest(WEATHER_ALL_DATA_REQUEST, workerGetWeatherAllDataSaga)
}

export const weatherSagas = [fork(watcherGetWeatherSaga)]
