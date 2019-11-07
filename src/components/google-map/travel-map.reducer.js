import { Record } from "immutable"
import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import {
  fetchTripsCurrent,
  fetchTripsFastGrow,
  fetchTripsMostExpensive,
  fetchTripsMostWanted,
  fetchTripsOffices,
  fetchTripsOverview
} from "../../../services/api.service"
import { travelMapCurrentTripDataTransform, travelMapTop5DataTransform } from "../../../services/utils.service"

const ReducerRecord = Record({
  error: false,
  loading: false,
  tripMapData: null,
  tripDetailsData: null,
  tripFastGrow: null,
  tripMostWanted: null,
  tripMostExpensive: null,
  tripOffices: null
})

export const moduleName = "widgets_travel_map"

export const TRIPS_MAP_REQUEST = `${moduleName}/TRIPS_REQUEST`
export const TRIPS_MAP_ERROR = `${moduleName}/TRIPS_ERROR`
export const TRIPS_MAP_SUCCESS = `${moduleName}/TRIPS_SUCCESS`

export const TRIPS_DETAILS_REQUEST = `${moduleName}/TRIPS_DETAILS_REQUEST`
export const TRIPS_DETAILS_ERROR = `${moduleName}/TRIPS_DETAILS_ERROR`
export const TRIPS_DETAILS_SUCCESS = `${moduleName}/TRIPS_DETAILS_SUCCESS`

export const TRIPS_FAST_GROW_REQUEST = `${moduleName}/TRIPS_FAST_GROW_REQUEST`
export const TRIPS_FAST_GROW_ERROR = `${moduleName}/TRIPS_FAST_GROW_ERROR`
export const TRIPS_FAST_GROW_SUCCESS = `${moduleName}/TRIPS_FAST_GROW_SUCCESS`

export const TRIPS_MOST_WANTED_REQUEST = `${moduleName}/TRIPS_MOST_WANTED_REQUEST`
export const TRIPS_MOST_WANTED_ERROR = `${moduleName}/TRIPS_MOST_WANTED_ERROR`
export const TRIPS_MOST_WANTED_SUCCESS = `${moduleName}/TRIPS_MOST_WANTED_SUCCESS`

export const TRIPS_MOST_EXPENSIVE_REQUEST = `${moduleName}/TRIPS_MOST_EXPENSIVE_REQUEST`
export const TRIPS_MOST_EXPENSIVE_ERROR = `${moduleName}/TRIPS_MOST_EXPENSIVE_ERROR`
export const TRIPS_MOST_EXPENSIVE_SUCCESS = `${moduleName}/TRIPS_MOST_EXPENSIVE_SUCCESS`

export const TRIPS_OFFICES_REQUEST = `${moduleName}/TRIPS_OFFICES_REQUEST`
export const TRIPS_OFFICES_ERROR = `${moduleName}/TRIPS_OFFICES_ERROR`
export const TRIPS_OFFICES_SUCCESS = `${moduleName}/TRIPS_OFFICES_SUCCESS`


export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action
  switch (type) {
    case TRIPS_MAP_REQUEST:
      return state
        .set("loading", true)
        .set("error", false)
    case TRIPS_DETAILS_REQUEST:
      return state
        .set("loading", true)
        .set("error", false)
    case TRIPS_MAP_ERROR || TRIPS_FAST_GROW_ERROR || TRIPS_MOST_WANTED_ERROR || TRIPS_MOST_EXPENSIVE_ERROR || TRIPS_OFFICES_ERROR:
      return state
        .set("loading", false)
        .set("error", payload)
    case TRIPS_DETAILS_SUCCESS:
      return state
        .set("loading", false)
        .set("tripDetailsData", payload)
    case TRIPS_MAP_SUCCESS:
      return state
        .set("loading", false)
        .set("tripMapData", payload)
    case TRIPS_FAST_GROW_SUCCESS:
      return state
        .set("loading", false)
        .set("tripFastGrow", payload)
    case TRIPS_MOST_WANTED_SUCCESS:
      return state
        .set("loading", false)
        .set("tripMostWanted", payload)
    case TRIPS_MOST_EXPENSIVE_SUCCESS:
      return state
        .set("loading", false)
        .set("tripMostExpensive", payload)
    case TRIPS_OFFICES_SUCCESS:
      return state
        .set("loading", false)
        .set("tripOffices", payload)
    default:
      return state
  }
}

export const getTripsCurrent = (companyId) => {
  return {
    type: TRIPS_MAP_REQUEST,
    companyId
  }
}

/**
 * Возвращает текущие командировки для компании или холдинга.
 * @param action
 * @returns {IterableIterator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: *}>>|SimpleEffect<"CALL", CallEffectDescriptor>|*[]>}
 */
export function* getTripsCurrentSaga(action) {
  try {
    const response = yield call(fetchTripsCurrent, action.companyId)
    const modifiedResponse = yield travelMapCurrentTripDataTransform(response.data)
    yield put({
      type: TRIPS_MAP_SUCCESS,
      payload: modifiedResponse
    })
  } catch (error) {
    yield put({
      type: TRIPS_MAP_ERROR,
      payload: error
    })
  }
}

export const getTripsOffices = (companyId) => {
  return {
    type: TRIPS_OFFICES_REQUEST,
    companyId
  }
}

/**
 * Возвращает информацию по оффисам компании.
 * @param action
 * @returns {IterableIterator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: *}>>|SimpleEffect<"CALL", CallEffectDescriptor>>}
 */
export function* getTripsOfficesSaga(action) {
  try {
    const response = yield call(fetchTripsOffices, action.companyId)
    yield put({
      type: TRIPS_OFFICES_SUCCESS,
      payload: response
    })
  } catch (error) {
    yield put({
      type: TRIPS_OFFICES_ERROR,
      payload: error
    })
  }
}

export const getTripsOverview = (tripNumber) => {
  return {
    type: TRIPS_DETAILS_REQUEST,
    tripNumber
  }
}

/**
 * Возвращает информацию по командировке: номер, номер поездки, ФИО путешественника, количество и тип услуг.
 * @param action
 * @returns {IterableIterator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: *}>>|*>}
 */
export function* getTripsOverviewSaga(action) {
  try {
    const response = yield call(fetchTripsOverview, action.tripNumber)
    yield put({
      type: TRIPS_DETAILS_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    yield put({
      type: TRIPS_DETAILS_ERROR,
      payload: error
    })
  }
}

export const getTripsFastGrow = (companyId) => {
  return {
    type: TRIPS_FAST_GROW_REQUEST,
    companyId
  }
}

/**
 * Возвращает информацию по командировкам: топ-5 быстрорастущих маршрутов за 6 месяцев
 * @param action
 * @returns {IterableIterator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: *}>>|*>}
 */
export function* getTripsFastGrowSaga(action) {
  try {
    const response = yield fetchTripsFastGrow(action.companyId)
    const modifiedResponse = yield call(travelMapTop5DataTransform, response.data)
    yield put({
      type: TRIPS_FAST_GROW_SUCCESS,
      payload: modifiedResponse.data
    })
  } catch (error) {
    yield put({
      type: TRIPS_FAST_GROW_ERROR,
      payload: error
    })
  }
}

export const getTripsMostWanted = (companyId) => {
  return {
    type: TRIPS_MOST_WANTED_REQUEST,
    companyId
  }
}

/**
 *
 * @param action
 * @returns {IterableIterator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: *}>>|*>}
 */
export function* getTripsMostWantedSaga(action) {
  try {
    const response = yield call(fetchTripsMostWanted, action.companyId)
    const modifiedResponse = yield call(travelMapTop5DataTransform, response.data)
    yield put({
      type: TRIPS_MOST_WANTED_SUCCESS,
      payload: modifiedResponse.data
    })
  } catch (error) {
    yield put({
      type: TRIPS_MOST_WANTED_ERROR,
      payload: error
    })
  }
}

export const getTripsMostExpensive = (companyId) => {
  return {
    type: TRIPS_MOST_EXPENSIVE_REQUEST,
    companyId
  }
}

/**
 * Возвращает информацию по командировкам: Топ-5 маршрутов по затратам
 * @param action
 * @returns {IterableIterator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: *}>>|*>}
 */
export function* getTripsMostExpensiveSaga(action) {
  try {
    const response = yield fetchTripsMostExpensive(action.companyId)
    const modifiedResponse = yield call(travelMapTop5DataTransform, response.data)
    yield put({
      type: TRIPS_MOST_EXPENSIVE_SUCCESS,
      payload: modifiedResponse.data
    })
  } catch (error) {
    yield put({
      type: TRIPS_MOST_EXPENSIVE_ERROR,
      payload: error
    })
  }
}

export const getTripOffices = (companyId) => {
  return {
    type: TRIPS_OFFICES_REQUEST,
    companyId
  }
}

/**
 * Возвращает информацию по командировкам: Топ-5 маршрутов по затратам
 * @param action
 * @returns {IterableIterator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: *}>>|*>}
 */
export function* getTripOfficesSaga(action) {
  try {
    const response = yield fetchTripsMostExpensive(action.companyId)
    yield put({
      type: TRIPS_MOST_EXPENSIVE_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    yield put({
      type: TRIPS_MOST_EXPENSIVE_ERROR,
      payload: error
    })
  }
}

export function* saga() {
  yield takeLatest(TRIPS_MAP_REQUEST, getTripsCurrentSaga)
  yield takeEvery(TRIPS_DETAILS_REQUEST, getTripsOverviewSaga)
  yield takeEvery(TRIPS_FAST_GROW_REQUEST, getTripsFastGrowSaga)
  yield takeEvery(TRIPS_MOST_WANTED_REQUEST, getTripsMostWantedSaga)
  yield takeEvery(TRIPS_MOST_EXPENSIVE_REQUEST, getTripsMostExpensiveSaga)
  yield takeEvery(TRIPS_OFFICES_REQUEST, getTripsOfficesSaga)
}
