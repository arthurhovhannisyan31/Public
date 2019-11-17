import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../../redux'
import axiosInterceptors from "../../services/interceptor.service"

import { app, notFound, accessDenied } from '../../routes/rootRouting'

axiosInterceptors()

const routes = [notFound, accessDenied, app]

const a = routes.map(config => (
  <Route key={config.path} {...config}/>
))
console.log(a)

const Root = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {routes.map(config => (
            <Route key={config.path} {...config}/>
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default Root
