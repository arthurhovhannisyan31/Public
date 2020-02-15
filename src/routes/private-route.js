// external libraries
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
// local services & data store
// local containers & components
// local constants & styles
import CONSTS from "../constants"

const isLoggedIn = true

const PrivateRoute = ({component: Component, ...params}) => {

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...params}
      render={props => (
        isLoggedIn
          // eslint-disable-next-line react/jsx-props-no-spreading
          ? <Component {...props}/>
          : <Redirect to={CONSTS.ROUTES.LOGIN}/>
      )}
    />
  )
}

export default PrivateRoute
