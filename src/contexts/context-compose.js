import React from 'react'
import NavMenuContextContainer from "./nav-menu.context"

const ContextCompose = ({children}) => {

  return (
    <>
      <NavMenuContextContainer>
        {children}
      </NavMenuContextContainer>
    </>
  )
}

export default ContextCompose
