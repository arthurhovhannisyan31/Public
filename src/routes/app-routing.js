// external libraries
// local services & data store
import { lazy } from 'react'
import { routeMaker } from '../services/utilities.service'
// local containers & components
// local constants & styles
import CONSTS from '../constants'

const Dashboard = lazy(() => import('../containers/dashboard'))
const Messages = lazy(() => import('../containers/messages'))
const News = lazy(() => import('../containers/news'))
const Notifications = lazy(() => import('../containers/notifications'))
const Welcome = lazy(() => import('../containers/welcome'))
const Settings = lazy(() => import('../containers/settings'))
const Login = lazy(() => import('../containers/login'))
const Hotels = lazy(() => import('../containers/hotels'))
const Weather = lazy(() => import('../containers/weather'))

const dashboard = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.DASHBOARD.ROUTE,
  component: Dashboard,
}
const messages = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.MESSAGES.ROUTE,
  component: Messages,
}
const news = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.NEWS.ROUTE,
  component: News,
}
const settings = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.SETTINGS.ROUTE,
  component: Settings,
}
const notifications = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.NOTIFICATIONS.ROUTE,
  component: Notifications,
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
  component: Login,
}

const hotels = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.HOTELS.ROUTE,
  component: Hotels,
}

const weather = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.WEATHER.ROUTE,
  component: Weather,
}

const appRoutes = [
  dashboard,
  messages,
  news,
  hotels,
  weather,
  notifications,
  settings,
  welcome,
  login,
].map(({ isPrivate, ...params }) => routeMaker(isPrivate, params))

export default appRoutes
