// external libraries
import {routeMaker} from '../services/utilities.service'
// local services & data store
// local containers & components
import NotFound from '../containers/not-found'
import Login from "../containers/login"
// local constants & styles
import CONSTS from "../constants"

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
