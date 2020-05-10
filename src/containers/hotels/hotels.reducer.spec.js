import { call, put, delay } from 'redux-saga/effects'
import { runSaga } from 'redux-saga'
import {HOTELS_REQUEST_SUCCESS, workerGetHotelsSaga} from './hotels.reducer'
import {fetchHotels} from "../../services/api.services"

// sequence test
it('Get hotels list sequence test', () => {
  const {id, length, firstLoad} = {id: 0, length: 10, firstLoad: false}
  const gen = workerGetHotelsSaga({id, length, firstLoad })

  expect(gen.next().value)
    .toEqual(delay(2500))

  expect(gen.next().value)
    .toEqual(call(fetchHotels, {id, length}))

  const {data, nextIndex} = {data: [0], nextIndex: (id + length + 1)}

  expect(gen.next({data, nextIndex}).value)
    .toEqual(put({
      type: HOTELS_REQUEST_SUCCESS,
      payload: data,
      nextId: nextIndex
    }))

  expect(gen.next().done)
    .toEqual(true)

})


// full saga test


const success = ({data, nextIndex}) => ({
  type: HOTELS_REQUEST_SUCCESS,
  payload: data,
  nextId: nextIndex
})

it('Get hotels list full saga test', async () => {
  const {id, length, firstLoad} = {id: 0, length: 10, firstLoad: false}

  const dispatched = []
  const result = await runSaga({
    dispatch: action => dispatched.push(action),
    getState: () => ({state: 'test'})
  }, workerGetHotelsSaga, {id, length, firstLoad}).toPromise()

  // call(workerGetHotelsSaga, {id, length, firstLoad})
  call(workerGetHotelsSaga, {id, length, firstLoad})

  expect(dispatched)
    .toEqual([success(result)])
})
