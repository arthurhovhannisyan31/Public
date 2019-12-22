// external libraries
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// local services & data store
import store from '../../redux'
import axiosInterceptors from "../../services/interceptor.service"
// local containers
import App from '../app'
// local components
import ErrorBoundary from "../../components/error/error.boundary"
import Spinner from "../../components/ui/spinner"
// local constants
// local styles

axiosInterceptors()

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          {/*<App/>*/}
          <Spinner
            width={400}
            height={400}
          />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  )
}

export default Root
