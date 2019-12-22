// external libraries
// local services & data store
import {routeMaker} from '../services/utilities.service'
// local containers
import Welcome from "../containers/welcome"
import Weather from "../containers/weather"
import Travel from "../containers/travel"
import Chat from '../containers/chat'
// local components
// local constants
import CONSTS from "../constants"
// local styles

const welcome = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.WELCOME,
  component: Welcome,
}

const weather = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.WEATHER,
  component: Weather
}

const travel = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.TRAVEL,
  component: Travel
}

const chat = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.CHAT,
  component: Chat
}

const appRoutes = [welcome, weather, travel, chat]
  .map(({isPrivate, ...params}) => (
  routeMaker(isPrivate, params)
))

export default appRoutes
