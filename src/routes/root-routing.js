// external libraries
import { lazy } from 'react'
import { routeMaker } from '../services/utilities.service'
// local services & data store
// local containers & components
// local constants & styles
import CONSTS from '../constants'

const NotFound = lazy(() => import('../containers/not-found'))
const Login = lazy(() => import('../containers/login'))

const login = {
  exact: true,
  path: CONSTS.ROUTES.LOGIN.ROUTE,
  component: Login
}

const notFound = {
  exact: true,
  path: CONSTS.ROUTES.NOT_FOUND.ROUTE,
  component: NotFound,
}

const rootRoutes = [login, notFound].map(({ isPrivate, ...params }) =>
  routeMaker(isPrivate, params)
)

export default rootRoutes
