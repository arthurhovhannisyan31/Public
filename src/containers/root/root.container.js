// external libraries
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// local services & data store
import store from '../../store'
import axiosInterceptors from '../../services/interceptor.service'
import ContextCompose from '../../contexts'
// local containers & components
import App from '../app'
import ErrorBoundary from '../../components/error/error.boundary'
// local constants & styles

axiosInterceptors()

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ContextCompose>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ContextCompose>
      </BrowserRouter>
    </Provider>
  )
}

export default Root
