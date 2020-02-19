// external libraries
import React from 'react'
// local services & data store
// local containers & components
// import Footer from '../../components/layout/footer'
// import Header from '../../components/layout/header'
import Main from '../../components/layout/main'
import NavigationMenu from "../../components/ui/navigation"
// local constants & styles
import './layout.style.scss'

// header > nav
// article > section
// aside
// footer

const Layout = ({children}) => {
  return (
    <div className='layout horizontal-block'>
      {/* <Header/> */}
      <Main>
        <NavigationMenu/>
        <div className='layout__content'>
          {children}
        </div>
      </Main>
      {/* <Footer/> */}
    </div>
  )
}

export  default Layout
