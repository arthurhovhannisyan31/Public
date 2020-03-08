// external libraries
import React from 'react'
// local services & data store
// local containers & components
import NavMenuContextContainer from "./nav-menu.context"
import WindowSizeContextContainer from './window-size.context'
// local constants & styles

const ContextCompose = ({children}) => {
  return (
    <NavMenuContextContainer>
      <WindowSizeContextContainer>
        {children}
      </WindowSizeContextContainer>
    </NavMenuContextContainer>
  )
}

export default ContextCompose
