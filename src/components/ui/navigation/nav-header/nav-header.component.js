import React from 'react'
import Icon from "../../icons/icon.component"
import CONSTS from "../../../../constants"
import './nav-header.style.scss'

const NavHeader = ({collapse}) => {

  return (
    <div className='nav-header'>
      <div className='nav-header__container'>
        <div className='nav-header__logo'>
          <Icon
            label='main-logo'
            colorMain={CONSTS.COMPONENTS.STYLES.COLORS.PRIMARY}
            opacityMain={1}
          />
        </div>
        {!collapse && <span className='nav-header__title'>Some epic label</span>}
      </div>
    </div>
  )
}

export default NavHeader
