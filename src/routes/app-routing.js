// external libraries
// local services & data store
import {routeMaker} from '../services/utilities.service'
// local containers & components
import Dashboard from "../containers/dashboard"
import Messages from "../containers/messages"
import News from '../containers/news'
import Notifications from "../containers/notifications"
import Welcome from "../containers/welcome"
import Settings from "../containers/settings"
import Login from "../containers/login"
// local constants & styles
import CONSTS from "../constants"

const dashboard = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.DASHBOARD.ROUTE,
  component: Dashboard
}
const messages = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.MESSAGES.ROUTE,
  component: Messages
}
const news = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.NEWS.ROUTE,
  component: News
}
const settings = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.SETTINGS.ROUTE,
  component: Settings
}
const notifications = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.NOTIFICATIONS.ROUTE,
  component: Notifications
}
const welcome = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.WELCOME.ROUTE,
  component: Welcome,
}
const login = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.LOGIN.ROUTE,
  component: Login
}


const appRoutes = [dashboard, messages, news, notifications, settings, welcome, login]
  .map(({isPrivate, ...params}) => (
  routeMaker(isPrivate, params)
))

export default appRoutes
