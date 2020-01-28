// external libraries
import React from 'react'
// local services & data store
// local containers
// local components
import Footer from '../../components/layout/footer'
import Header from '../../components/layout/header'
import Main from '../../components/layout/main'
import NavMenu from '../../components/layout/nav-menu'
// local constants
// local styles
import './layout.style.scss'

const Layout = ({children}) => {
  return (
    <div className='Layout'>
      <Header/>
      <Main>
        {/*<NavMenu/>*/}
        {children}
      </Main>
      <Footer/>
    </div>
  )
}

export  default Layout
