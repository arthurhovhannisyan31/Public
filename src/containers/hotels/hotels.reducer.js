import { Map, Record } from 'immutable';
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchHotels } from '../../services/api.services';

/**
 * Initial state
 * @type {Record.Factory<{error: boolean, loading: boolean}>}
 */
const InitialStateRecord = Record({
  error: false,
  loading: false,
  hotels: [],
  hotelsCollection: new Map()
});

/**
 * Declare used constants
 * @type {string}
 */
export const moduleName = 'hotels';
export const HOTELS_REQUEST = `${moduleName}/HOTELS_REQUEST`;
export const HOTELS_REQUEST_ERROR = `${moduleName}/HOTELS_REQUEST_ERROR`;
export const HOTELS_REQUEST_SUCCESS = `${moduleName}/HOTELS_REQUEST_SUCCESS`;

/**
 * Hotels reducer
 * @param state
 * @param action
 * @returns {(Record<{error: boolean, loading: boolean}> & Readonly<{error: boolean, loading: boolean}>)|any}
 */
export const hotelsReducer = (state = new InitialStateRecord(), action) => {
  const { type, payload } = action;
  switch (type) {
    case HOTELS_REQUEST:
      return state.set('loading', true).set('error', false);
    case HOTELS_REQUEST_ERROR:
      return state.set('loading', false).set('error', payload);
    case HOTELS_REQUEST_SUCCESS:
      return state.set('loading', false).set('hotels', payload);
    // .update('hotelsCollection', collection =>
    //   collection
    //     .set(key, payload)
    // )
    default:
      return state;
  }
};

export const delay = ms => new Promise(res => setTimeout(res, ms));

/**
 * Returns HOTELS_REQUEST action with params
 * @param quantity
 * @returns {{quantity: *, type: string}}
 */
// const getHotels = quantity => {
//   return {
//     type: HOTELS_REQUEST,
//     quantity
//   }
// }

/**
 * Returns required hotels
 * @returns {any}
 */
export function* getHotelsSaga() {
  try {
    yield call(delay, 500);
    const data = yield call(fetchHotels);
    yield put({ type: HOTELS_REQUEST_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: HOTELS_REQUEST_ERROR, payload: e });
  }
}

/**
 * Effect watcher
 * @returns {any}
 */
export default function* saga() {
  yield takeEvery(HOTELS_REQUEST, getHotelsSaga);
}
