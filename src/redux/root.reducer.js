// external libraries
import { combineReducers } from 'redux';
// local services & data store
import {
  hotelsReducer,
  moduleName as hotelModuleName
} from '../containers/hotels/hotels.reducer';
// local containers & components
// local constants & styles

/**
 * reducer composition
 * @type {any}
 */
const rootReducer = combineReducers({
  [hotelModuleName]: hotelsReducer
});

export default rootReducer;
