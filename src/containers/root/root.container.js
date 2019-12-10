// external libraries
import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { rootRoutes } from '../../routes'
// local services & data store
import store from '../../redux'
import axiosInterceptors from "../../services/interceptor.service"
// local containers
// local components
import ErrorBoundary from "../../components/error/error.boundary"
// local constants
// local styles

axiosInterceptors()

const Root = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Switch>
            { rootRoutes }
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  )
}

export default Root
