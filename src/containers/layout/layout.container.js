// external libraries
import React from 'react'
// local services & data store
// local containers
// local components
// local constants
// local styles
import './layout.style.scss'

const Layout = ({children}) => {

  return (
    <div className='layout'>
      <h1>Layout</h1>
      {children}
    </div>
  )
}

export  default Layout
