// external libraries
// eslint-disable-next-line no-unused-vars
import { runSaga } from 'redux-saga'
import { call, put, delay } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing'
import { expectSaga, testSaga } from 'redux-saga-test-plan'
// local services & data store
import { workerGetHotelsSaga } from '../../store/hotels/sagas'
import { fetchHotels } from '../../store/hotels/services'
// local containers & components
// local constants & styles
import { HOTELS_REQUEST_SUCCESS } from '../../store/hotels/constants'

describe('Hotels reducer test', () => {
  it('Unit test -get hotels list', () => {
    const { id, length, firstLoad } = {
      id: 0,
      length: 10,
      firstLoad: false,
    }
    const gen = workerGetHotelsSaga({
      id,
      length,
      firstLoad,
    })

    expect(gen.next().value).toEqual(delay(2500))
    expect(gen.next().value).toEqual(
      call(fetchHotels, {
        id,
        length,
      })
    )

    const { data, nextIndex } = {
      data: [0],
      nextIndex: id + length + 1,
    }
    expect(
      gen.next({
        data,
        nextIndex,
      }).value
    ).toEqual(
      put({
        type: HOTELS_REQUEST_SUCCESS,
        payload: data,
        nextId: nextIndex,
      })
    )
    expect(gen.next().done).toEqual(true)
  })

  // it('Integration test - get hotels list', async () => {
  //   const success = ({ data, nextIndex }) => ({
  //     type: HOTELS_REQUEST_SUCCESS,
  //     payload: data,
  //     nextId: nextIndex,
  //   })
  //   const { id, length, firstLoad } = { id: 0, length: 10, firstLoad: false }
  //
  //   const dispatched = []
  //   const result = await runSaga(
  //     {
  //       dispatch: (action) => dispatched.push(action),
  //       getState: () => ({ state: 'test' }),
  //     },
  //     workerGetHotelsSaga,
  //     { id, length, firstLoad }
  //   ).toPromise()
  //
  //   call(workerGetHotelsSaga, { id, length, firstLoad })
  //   expect(dispatched).toEqual([success(result)])
  // })

  // redux-saga-testing unit test

  describe('Unit test - redux-saga-testing. Scenario 1: id: 0, length: 10, firstLoad: false', () => {
    const { id, length, firstLoad } = {
      id: 0,
      length: 10,
      firstLoad: false,
    }
    const it = sagaHelper(
      workerGetHotelsSaga({
        id,
        length,
        firstLoad,
      })
    )
    const { data, nextIndex } = {
      data: [0],
      nextIndex: id + length + 1,
    }

    it('should delay saga for first call', (result) => {
      expect(result).toEqual(delay(2500))
    })
    it('should call fetchHotels api', (result) => {
      expect(result).toEqual(
        call(fetchHotels, {
          id,
          length,
        })
      )
      return {
        data,
        nextIndex,
      }
    })
    it('should put success type', (result) => {
      expect(result).toEqual(
        put({
          type: HOTELS_REQUEST_SUCCESS,
          payload: data,
          nextId: nextIndex,
        })
      )
    })
    it('should return obj', (result) => {
      expect(result).toEqual({
        data,
        nextIndex,
      })
    })
  })

  it('Unit test - redux-saga-test-plan', () => {
    const { id, length, firstLoad } = {
      id: 0,
      length: 10,
      firstLoad: false,
    }
    const { data, nextIndex } = {
      data: [0],
      nextIndex: id + length + 1,
    }
    testSaga(workerGetHotelsSaga, {
      id,
      length,
      firstLoad,
    })
      .next({
        id,
        length,
        firstLoad,
      })
      .delay(2500)
      .next()
      .call(fetchHotels, {
        id,
        length,
      })
      .next({
        data,
        nextIndex,
      })
      .put({
        type: HOTELS_REQUEST_SUCCESS,
        payload: data,
        nextId: nextIndex,
      })
      .next({
        data,
        nextIndex,
      })
      .isDone()
  })

  it('Integration test - redux-saga-test-plan, test only final effect with .provide()', () => {
    const { id, length, firstLoad } = {
      id: 0,
      length: 10,
      firstLoad: false,
    }
    const { data, nextIndex } = {
      data: [0],
      nextIndex: id + length + 1,
    }
    return expectSaga(workerGetHotelsSaga, {
      id,
      length,
      firstLoad,
    })
      .provide([
        [delay(2500)],
        [
          call(fetchHotels, {
            id,
            length,
          }),
          {
            data,
            nextIndex,
          },
        ],
      ])
      .put({
        type: HOTELS_REQUEST_SUCCESS,
        payload: data,
        nextId: nextIndex,
      })
      .run()
  })
})
