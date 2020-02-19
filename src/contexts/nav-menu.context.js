import React, {useState, createContext} from 'react'

const NavMenuContext = createContext({collapse: false})

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
