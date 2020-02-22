// external libraries
import React from 'react'
// local services & data store
// local containers & components
// local constants & styles
import './main.style.scss'

const Main = ({children}) => {

  return (
    <div className='main'>
      <div className='main__content horizontal-block'>
        {children}
      </div>
    </div>
  )
}

export default Main

