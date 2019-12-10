// external libraries
import React from 'react'
import { Route } from "react-router-dom"
// local containers
import App from '../containers/app'
import NotFound from '../containers/not-found'
import Login from "../containers/login"
// import AccessDenied from '../containers/access-denied'
// local constants
import CONSTS from "../constants"
// local components
import PrivateRoute from "./privateRoute"

const app = {
  exact: true,
  isPrivate: true,
  path: CONSTS.ROUTES.HOME,
  component: App,
}

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

// const accessDenied = {
//   exact: true,
//   path: '/access-denied',
//   component: AccessDenied
// }

const rootRoutes = [login, app, notFound].map(({isPrivate, ...params}) => (
  isPrivate
    ? <PrivateRoute key={params.path} {...params}/>
    : <Route key={params.path} {...params}/>
))

export default rootRoutes
