import { Record, Map } from 'immutable';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchTripsCurrent,
  fetchTripsFastGrow,
  fetchTripsMostExpensive,
  fetchTripsMostWanted,
  fetchTripsOffices,
  fetchTripsOverview
} from '../../../services/api.service';
import { travelMapCurrentTripDataTransform, travelMapTop5DataTransform } from '../../../services/utils.service';

const ReducerRecord = Record({
  error: false,
  loading: true,
  tripCurrent: null,
  tripCurrentCollection: new Map(),
  tripDetails: null,
  tripDetailsCollection: new Map(),
  tripFastGrow: null,
  tripFastGrowCollection: new Map(),
  tripMostWanted: null,
  tripMostWantedCollection: new Map(),
  tripMostExpensive: null,
  tripMostExpensiveCollection: new Map(),
  tripOffices: null,
  tripOfficesCollection: new Map(),
  test: new Map(),
});

export const moduleName = 'widgets_travel_map';

export const TRIPS_ERROR = `${moduleName}/TRIPS_ERROR`;
export const TRIPS_REQUEST = `${moduleName}/TRIPS_REQUEST`;

export const CLEAN_CURRENT = `${moduleName}/CLEAN_CURRENT`;

export const TRIPS_CURRENT_REQUEST = `${moduleName}/TRIPS_CURRENT_REQUEST`;
export const TRIPS_CURRENT_SUCCESS_SET = `${moduleName}/TRIPS_CURRENT_SUCCESS_SET`;
export const TRIPS_CURRENT_SUCCESS = `${moduleName}/TRIPS_CURRENT_SUCCESS`;

export const TRIPS_DETAILS_REQUEST = `${moduleName}/TRIPS_DETAILS_REQUEST`;
export const TRIPS_DETAILS_SUCCESS_SET = `${moduleName}/TRIPS_DETAILS_SUCCESS_SET`;
export const TRIPS_DETAILS_SUCCESS = `${moduleName}/TRIPS_DETAILS_SUCCESS`;

export const TRIPS_FAST_GROW_REQUEST = `${moduleName}/TRIPS_FAST_GROW_REQUEST`;
export const TRIPS_FAST_GROW_SUCCESS_SET = `${moduleName}/TRIPS_FAST_GROW_SUCCESS_SET`;
export const TRIPS_FAST_GROW_SUCCESS = `${moduleName}/TRIPS_FAST_GROW_SUCCESS`;

export const TRIPS_MOST_WANTED_REQUEST = `${moduleName}/TRIPS_MOST_WANTED_REQUEST`;
export const TRIPS_MOST_WANTED_SUCCESS_SET = `${moduleName}/TRIPS_MOST_WANTED_SUCCESS_SET`;
export const TRIPS_MOST_WANTED_SUCCESS = `${moduleName}/TRIPS_MOST_WANTED_SUCCESS`;

export const TRIPS_MOST_EXPENSIVE_REQUEST = `${moduleName}/TRIPS_MOST_EXPENSIVE_REQUEST`;
export const TRIPS_MOST_EXPENSIVE_SUCCESS_SET = `${moduleName}/TRIPS_MOST_EXPENSIVE_SUCCESS_SET`;
export const TRIPS_MOST_EXPENSIVE_SUCCESS = `${moduleName}/TRIPS_MOST_EXPENSIVE_SUCCESS`;

export const TRIPS_OFFICES_REQUEST = `${moduleName}/TRIPS_OFFICES_REQUEST`;
export const TRIPS_OFFICES_SUCCESS_SET = `${moduleName}/TRIPS_OFFICES_SUCCESS_SET`;
export const TRIPS_OFFICES_SUCCESS = `${moduleName}/TRIPS_OFFICES_SUCCESS`;

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload, key } = action;
  switch (type) {
    case CLEAN_CURRENT:
      return state
        .set('tripMostWanted', null)
        .set('tripFastGrow', null)
        .set('tripMostExpensive', null);
    case TRIPS_ERROR:
      return state
        .set("loading", false)
        .set("error", payload);
    case TRIPS_REQUEST:
      return state
        .set("loading", true)
        .set("error", false);
    case TRIPS_CURRENT_SUCCESS_SET:
      return state
        .update('tripCurrentCollection', collection => {
        return collection.set(key, payload)
      });
    case TRIPS_CURRENT_SUCCESS:
      return state
        .set("loading", false)
        .set("tripCurrent", payload);
    case TRIPS_DETAILS_SUCCESS_SET:
      return state.update('tripDetailsCollection', collection => {
        return collection.set(key, payload)
      });
    case TRIPS_DETAILS_SUCCESS:
      return state
        .set("loading", false)
        .set("tripDetails", payload);
    case TRIPS_FAST_GROW_SUCCESS_SET:
      return state.update('tripFastGrowCollection', collection => {
        return collection.set(key, payload)
      });
    case TRIPS_FAST_GROW_SUCCESS:
      return state
        .set("loading", false)
        .set("tripFastGrow", payload);
    case TRIPS_MOST_WANTED_SUCCESS_SET:
      return state.update('tripMostWantedCollection', collection => {
        return collection.set(key, payload)
      });
    case TRIPS_MOST_WANTED_SUCCESS:
      return state
        .set("loading", false)
        .set("tripMostWanted", payload);
    case TRIPS_MOST_EXPENSIVE_SUCCESS_SET:
      return state.update('tripMostExpensiveCollection', collection => {
        return collection.set(key, payload)
      });
    case TRIPS_MOST_EXPENSIVE_SUCCESS:
      return state
        .set("loading", false)
        .set("tripMostExpensive", payload);
    case TRIPS_OFFICES_SUCCESS_SET:
      return state.update('tripOfficesCollection', collection => {
        return collection.set(key, payload)
      });
    case TRIPS_OFFICES_SUCCESS:
      return state
        .set("loading", false)
        .set("tripOffices", payload);
    default:
      return state;
  }
}

export const cleanCurrent = () => {
  return { type: CLEAN_CURRENT }
};

export const getTripsCurrent = (companyId, collection) => {
  const data = collection.get(companyId);
  if (data) {
    return {
      type: TRIPS_CURRENT_SUCCESS,
      payload: data
    }
  }
  return {
    type: TRIPS_CURRENT_REQUEST,
    companyId
  }
};

/**
 * Возвращает текущие командировки для компании или холдинга.
 * @param action
 * @returns {Generator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string, key: *}>>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string}>>|SimpleEffect<"CALL", CallEffectDescriptor>|SimpleEffect<"PUT", PutEffectDescriptor<{type: string}>>|*[], void, ?>}
 */
export function * getTripsCurrentSaga (action) {
  try{
    yield put({ type: TRIPS_REQUEST });
    const response = yield call(fetchTripsCurrent, action.companyId);
    const modifiedResponse = yield travelMapCurrentTripDataTransform(response.data);

    yield put ({
      type: TRIPS_CURRENT_SUCCESS_SET,
      key: action.companyId,
      payload: modifiedResponse
    });
    yield put ({
      type: TRIPS_CURRENT_SUCCESS,
      payload: modifiedResponse
    });
  } catch (error) {
    yield put({
      type: TRIPS_ERROR,
      payload: error
    })
  }
}

export const getTripsOffices = (companyId, collection) => {
  const data = collection.get(companyId);
  if (data) {

    return {
      type: TRIPS_OFFICES_SUCCESS,
      payload: data
    }
  }
  return {
    type: TRIPS_OFFICES_REQUEST,
    companyId
  }
};

/**
 * Возвращает информацию по оффисам компании.
 * @param action
 * @returns {Generator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string, key: *}>>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string}>>|SimpleEffect<"CALL", CallEffectDescriptor>|SimpleEffect<"PUT", PutEffectDescriptor<{type: string}>>, void, ?>}
 */
export function * getTripsOfficesSaga (action) {
  try{
    yield put({ type: TRIPS_REQUEST });
    const response = yield call(fetchTripsOffices, action.companyId);
    yield put ({
      type: TRIPS_OFFICES_SUCCESS_SET,
      key: action.companyId,
      payload: response
    });
    yield put ({
      type: TRIPS_OFFICES_SUCCESS,
      payload: response
    });
  } catch (error) {
    yield put({
      type: TRIPS_ERROR,
      payload: error
    })
  }
}

export const getTripsOverview = (tripNumber, collection) => {
  const data = collection.get(tripNumber);
  if (data) {
    return {
      type: TRIPS_DETAILS_SUCCESS,
      payload: data
    }
  }
  return {
    type: TRIPS_DETAILS_REQUEST,
    tripNumber
  }
};

/**
 * Возвращает информацию по командировке: номер, номер поездки, ФИО путешественника, количество и тип услуг.
 * @param action
 * @returns {Generator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string, key: *}>>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string}>>|SimpleEffect<"CALL", CallEffectDescriptor>|SimpleEffect<"PUT", PutEffectDescriptor<{type: string}>>, void, ?>}
 */
export function * getTripsOverviewSaga(action) {
  try {
    yield put({ type: TRIPS_REQUEST });
    const response = yield call(fetchTripsOverview, action.tripNumber);
    yield put({
      type: TRIPS_DETAILS_SUCCESS_SET,
      key: action.tripNumber,
      payload: response.data
    });
    yield put({
      type: TRIPS_DETAILS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    yield put({
      type: TRIPS_ERROR,
      payload: error
    })
  }
}

export const getTripsFastGrow = (companyId, collection) => {
  const data = collection.get(companyId);
  if (data) {
    return {
      type: TRIPS_FAST_GROW_SUCCESS,
      payload: data
    }
  }
  return {
    type: TRIPS_FAST_GROW_REQUEST,
    companyId
  }
};

/**
 * Возвращает информацию по командировкам: топ-5 быстрорастущих маршрутов за 6 месяцев
 * @param action
 * @returns {Generator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string, key: *}>>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string}>>|SimpleEffect<"CALL", CallEffectDescriptor>|SimpleEffect<"PUT", PutEffectDescriptor<{type: string}>>|*, void, ?>}
 */
export function * getTripsFastGrowSaga(action) {
  try {
    yield put({ type: TRIPS_REQUEST });
    const response = yield fetchTripsFastGrow(action.companyId);
    const modifiedResponse = yield call(travelMapTop5DataTransform, response.data);
    yield put({
      type: TRIPS_FAST_GROW_SUCCESS_SET,
      key: action.companyId,
      payload: modifiedResponse.data
    });
    yield put({
      type: TRIPS_FAST_GROW_SUCCESS,
      payload: modifiedResponse.data
    });
  } catch (error) {
    yield put({
      type: TRIPS_ERROR,
      payload: error
    })
  }
}

export const getTripsMostWanted = (companyId, collection) => {
  const data = collection.get(companyId);
  if (data) {
    return {
      type: TRIPS_MOST_WANTED_SUCCESS,
      payload: data
    }
  }
  return {
    type: TRIPS_MOST_WANTED_REQUEST,
    companyId
  }
};

/**
 * Возвращает топ направлений по количеству командировок.
 * @param action
 * @returns {Generator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string, key: *}>>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string}>>|SimpleEffect<"CALL", CallEffectDescriptor>|SimpleEffect<"PUT", PutEffectDescriptor<{type: string}>>, void, ?>}
 */
export function * getTripsMostWantedSaga(action) {
  try {
    yield put({ type: TRIPS_REQUEST });
    const response = yield call(fetchTripsMostWanted, {companyId: action.companyId});
    const modifiedResponse = yield call(travelMapTop5DataTransform, response.data);
    yield put({
      type: TRIPS_MOST_WANTED_SUCCESS_SET,
      key: action.companyId,
      payload: modifiedResponse.data
    });
    yield put({
      type: TRIPS_MOST_WANTED_SUCCESS,
      payload: modifiedResponse.data
    });
  } catch (error) {
    yield put({
      type: TRIPS_ERROR,
      payload: error
    })
  }
}

export const getTripsMostExpensive = (companyId, collection) => {
  const data = collection.get(companyId);
  if (data) {
    return {
      type: TRIPS_MOST_EXPENSIVE_SUCCESS,
      payload: data
    }
  }
  return {
    type: TRIPS_MOST_EXPENSIVE_REQUEST,
    companyId
  }
};

/**
 * Возвращает информацию по командировкам: Топ-5 маршрутов по затратам
 * @param action
 * @returns {Generator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string, key: *}>>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string}>>|SimpleEffect<"CALL", CallEffectDescriptor>|SimpleEffect<"PUT", PutEffectDescriptor<{type: string}>>, void, ?>}
 */
export function * getTripsMostExpensiveSaga(action) {
  try {
    yield put({ type: TRIPS_REQUEST });
    const response = yield call(fetchTripsMostExpensive, {companyId: action.companyId});
    const modifiedResponse = yield call(travelMapTop5DataTransform, response.data);
    yield put({
      type: TRIPS_MOST_EXPENSIVE_SUCCESS_SET,
      key: action.companyId,
      payload: modifiedResponse.data
    });
    yield put({
      type: TRIPS_MOST_EXPENSIVE_SUCCESS,
      payload: modifiedResponse.data
    });
  } catch (error) {
    yield put({
      type: TRIPS_ERROR,
      payload: error
    })
  }
}

export function * saga() {
  yield takeEvery(TRIPS_CURRENT_REQUEST, getTripsCurrentSaga);
  yield takeEvery(TRIPS_DETAILS_REQUEST, getTripsOverviewSaga);
  yield takeEvery(TRIPS_FAST_GROW_REQUEST, getTripsFastGrowSaga);
  yield takeEvery(TRIPS_MOST_WANTED_REQUEST, getTripsMostWantedSaga);
  yield takeEvery(TRIPS_MOST_EXPENSIVE_REQUEST, getTripsMostExpensiveSaga);
  yield takeEvery(TRIPS_OFFICES_REQUEST, getTripsOfficesSaga);
}
