// external libraries
import React from 'react'
import {Route} from "react-router-dom"
// local components
import PrivateRoute from "../routes/privateRoute"

/**
 * localStorage handler
 * @returns {*}
 */
export const localeStorage = () => typeof(Storage) !== 'undefined'
  ? {
    setItem: (key, value) => localStorage.setItem(key, value),
    getItem: (key) => localeStorage.getItem(key),
    removeItem: (key) => localeStorage.removeItem(key),
    clear: () => localeStorage.clear(),
    key: (key) => localeStorage.key(key)
  }
  : () => {throw new Error('No web storage Support.')}


export const routeMaker = (isPrivate, params) => (
    isPrivate
      ? <PrivateRoute key={params.path} {...params}/>
      : <Route key={params.path} {...params}/>
)
