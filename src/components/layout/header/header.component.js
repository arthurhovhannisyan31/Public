// external libraries__content
import React from 'react'
// local services & data store
// local containers
// local components
// local constants
// local styles
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

