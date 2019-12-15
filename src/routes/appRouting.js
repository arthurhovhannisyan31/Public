// local services & data store
import {routeMaker} from '../services/utilities.service'
// local containers
import Weather from "../containers/weather"
import Travel from "../containers/travel"
import Chat from '../containers/chat'
// local constants
import CONSTS from "../constants"

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

const appRoutes = [weather, travel, chat]
  .map(({isPrivate, ...params}) => {
  routeMaker(isPrivate, params)
})

export default appRoutes
