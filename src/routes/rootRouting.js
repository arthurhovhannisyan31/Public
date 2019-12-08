import React from 'react'
import { Route } from "react-router-dom"
import App from '../containers/app'
import NotFound from '../containers/not-found'
// import AccessDenied from '../containers/access-denied'

const app = {
  exact: true,
  path: ['/', '/index.html'],
  component: App,
}

const notFound = {
  exact: true,
  path: ['*', '/not-found'],
  component: NotFound,
}

// const accessDenied = {
//   exact: true,
//   path: '/access-denied',
//   component: AccessDenied
// }

const routesOrder = [app, notFound]

const rootRoutes = routesOrder.map(config => (
  <Route key={config.path} {...config}/>
))

export default rootRoutes
