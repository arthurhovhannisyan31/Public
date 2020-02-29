// external libraries
import React from 'react'
// local services & data store
import {useRouter} from "../../../../services/utilities.service"
// local containers & components
import Icon from "../../icons/icon.component"
// local constants & styles
import CONSTS from "../../../../constants"
import './nav-header.style.scss'

const NavHeader = ({collapse}) => {
  const router =  useRouter()
  const route = CONSTS.ROUTES.DASHBOARD.ROUTE[0]

  return (
    <button
      type="button"
      className='nav-header'
      onClick={() => router.push(route)}
    >
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
    </button>
  )
}

export default NavHeader
