// external libraries
import React from 'react'
// local services & data store
// local containers & components
// local constants & styles
import './main.style.scss'

const Main = ({children}) => {

  return (
    <main className='main'>
      <div className='main__content horizontal-block'>
        {children}
      </div>
    </main>
  )
}

export default Main

