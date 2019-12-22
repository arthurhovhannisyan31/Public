// external libraries
import React, { useState } from 'react'
import {Route} from "react-router-dom"
// local services & data store
// local containers
// local components
import PrivateRoute from "../routes/private-route"
// local constants
// local styles

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

export const useHover = () => {
  const [hovering, setHovering] = useState(false)
  const onMouseOver = () => setHovering(true)
  const onMouseOut = () => setHovering(false)
  return [hovering, {
    onMouseOut,
    onMouseOver
  }]
}
