import React from 'react'

import './left-shadow.style.scss'

const LeftShadow = ({children}) => {

  return (
    <div className='left-shadow-default'>
      {children}
    </div>
  )
}

export default LeftShadow
