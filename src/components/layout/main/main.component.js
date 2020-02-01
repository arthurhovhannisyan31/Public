// external libraries
import React from 'react'
// local services & data store
// local containers
// local components
// local constants
// local styles
import './main.style.scss'

const Main = ({children}) => {

  return (
    <div className='Main'>
      <div className='Main__content'>
        {children}
      </div>
    </div>
  )
}

export default Main

