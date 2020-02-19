// external libraries
import React, {useContext} from 'react'
import ClassNames from 'classnames'
// local services & data store
// local containers & components
// import Footer from '../../components/layout/footer'
// import Header from '../../components/layout/header'
import Main from '../../components/layout/main'
import NavMenu from "../../components/layout/nav-menu"
// local constants & styles
import './layout.style.scss'
import {NavMenuContext} from "../../contexts/nav-menu.context"


// header > nav
// article > section
// aside
// footer

const Layout = ({children}) => {
  const {collapse} = useContext(NavMenuContext)
  const className = ClassNames({
    collapse
  })
  return (
    <div className={`layout horizontal-block ${className}`}>
      {/* <Header/> */}
      <Main>
        <NavMenu/>
        <div className='layout__content'>
          {children}
        </div>
      </Main>
      {/* <Footer/> */}
    </div>
  )
}

export  default Layout
