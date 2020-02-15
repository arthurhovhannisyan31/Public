// external libraries
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// local services & data store
import store from '../../redux'
import axiosInterceptors from "../../services/interceptor.service"
// local containers & components
import App from '../app'
import ErrorBoundary from "../../components/error/error.boundary"
// local constants & styles

axiosInterceptors()

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <App/>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  )
}

export default Root
