// external libraries
import React, {createContext, useState} from 'react'
// local services & data store
// local containers & components
// local constants & styles

const NavMenuContext = createContext(null)

const NavMenuContextContainer = ({children}) => {
  const [collapse, setCollapse] = useState(false)
  const navMenuValue = {collapse, setCollapse}
  return (
    <NavMenuContext.Provider value={navMenuValue}>
      {children}
    </NavMenuContext.Provider>
  )
}
export {
  NavMenuContextContainer as default,
  NavMenuContext
}
