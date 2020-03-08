// external libraries
import React, {createContext} from 'react'
// local services & data store
import {useWindowSize} from "../services/utilities.service"
// local containers & components
// local constants & styles

const WindowSizeContext = createContext(null)

const WindowSizeContextContainer = ({children}) => {
  const windowSize = useWindowSize()
  return (
    <WindowSizeContext.Provider value={windowSize}>
      {children}
    </WindowSizeContext.Provider>
  )
}

export {
  WindowSizeContextContainer as default,
  WindowSizeContext
}