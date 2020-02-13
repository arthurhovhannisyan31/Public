// external libraries
import React from 'react'
// local services & data store
// local containers & components
// local constants & styles
import './header.style.scss'

const Header = () => {

  return (
    <div className='header'>
      <div className='header__content'>
        <div>
          <span>menu collapse toggle</span>
          <span>Logo</span>
        </div>
        <div>
          <span>search field</span>
          <span>notifications</span>
          <span>avatar + info </span>
        </div>
      </div>
    </div>
  )
}

export default Header

