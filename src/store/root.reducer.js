// external libraries
import { combineReducers } from 'redux'
// local services & data store
import { hotelsReducer, moduleName as hotelModuleName } from './hotels'
import { weatherReducer, moduleName as weatherModuleName } from './weather'
// local containers & components
// local constants & styles

/**
 * reducer composition
 * @type {any}
 */
const rootReducer = combineReducers({
  [hotelModuleName]: hotelsReducer,
  [weatherModuleName]: weatherReducer
})

export default rootReducer
