import React from 'react'

import Footer from './footer'
import Header from './header'
import Main from './main'
import NavMenu from './nav-menu'

import './layout.style.scss'

const Layout = ({children}) => {

  return (
    <div className='layout'>
      <Header/>
      <Main>
        <NavMenu/>
        {children}
      </Main>
      <Footer/>
    </div>
  )
}

export default Layout
