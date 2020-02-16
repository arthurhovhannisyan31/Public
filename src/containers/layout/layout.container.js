// external libraries
import React from 'react'
// local services & data store
// local containers & components
// import Footer from '../../components/layout/footer'
// import Header from '../../components/layout/header'
import Main from '../../components/layout/main'
import {NavigationMenuMock} from "../../components/ui/navigation/components/navigation-menu"
// local constants & styles
import './layout.style.scss'


// header > nav
// article > section
// aside
// footer

const Layout = ({children}) => {
  return (
    <div className='layout'>
      {/* <Header/> */}
      <Main>
        <NavigationMenuMock

        />
        {children}
      </Main>
      {/* <Footer/> */}
    </div>
  )
}

export  default Layout
