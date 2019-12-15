// external libraries
// local services & data store
import {routeMaker} from '../services/utilities.service'
// local containers
import NotFound from '../containers/not-found'
import Login from "../containers/login"
// local components
// local constants
import CONSTS from "../constants"
// local styles

const login = {
  exact: true,
  path: CONSTS.ROUTES.LOGIN,
  component: Login
}

const notFound = {
  exact: true,
  path: CONSTS.ROUTES.NOT_FOUND,
  component: NotFound,
}

const rootRoutes = [login, notFound]
  .map(({isPrivate, ...params}) => (
  routeMaker(isPrivate, params)
))

export default rootRoutes
