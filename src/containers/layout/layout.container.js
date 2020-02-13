// external libraries
import React from 'react'
// local services & data store
// local containers & components
import Footer from '../../components/layout/footer'
import Header from '../../components/layout/header'
import Main from '../../components/layout/main'
// local constants & styles
import './layout.style.scss'

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Header/>
      <Main>
        {children}
      </Main>
      <Footer/>
    </div>
  )
}

export  default Layout
