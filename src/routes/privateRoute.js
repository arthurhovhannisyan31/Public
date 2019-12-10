// external libraries
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
// local constants
import CONSTS from "../constants"

const isLoggedIn = true

const PrivateRoute = ({component: Component, ...params}) => {

  return (
    <Route
      {...params}
      render={props => (
        isLoggedIn
          ? <Component {...props}/>
          : <Redirect to={CONSTS.ROUTES.LOGIN}/>
      )}
    />
  )
}

export default PrivateRoute
