// external libraries
import React from 'react'
// local services & data store
// local containers & components
import NavMenuContextContainer from "./nav-menu.context"
// local constants & styles

const ContextCompose = ({children}) => {
  return (
    <NavMenuContextContainer>
      {children}
    </NavMenuContextContainer>
  )
}

export default ContextCompose
