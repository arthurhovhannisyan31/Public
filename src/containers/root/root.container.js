import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { rootRoutes } from '../../routes'

import store from '../../redux'
import axiosInterceptors from "../../services/interceptor.service"

axiosInterceptors()

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          { rootRoutes }
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default Root
