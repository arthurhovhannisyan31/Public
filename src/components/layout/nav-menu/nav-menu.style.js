// external libraries
import React, {useContext} from 'react'
// local services & data store
import {useRouter} from "../../../services/utilities.service"
import {NavMenuContext} from '../../../contexts/nav-menu.context'
// local containers & components
import Divider from "../../ui/lines/devider"
import {LineItem, VerticalSheets} from "../../ui/navigation"
import HeaderArea from "../../ui/navigation/header-area/header-area.component"
import ToggleSidebar from "../../ui/navigation/toggle-sidebar"
// local constants & styles
import CONSTS from "../../../constants"
import './nav-menu.style.scss'

const NavMenu = () => {
  const router =  useRouter()
  const {location: {pathname}} = router
  const {collapse, setCollapse} = useContext(NavMenuContext)

  const groupAssembler = group => group
    .map(({LABEL, ICON, ROUTE}) => {
      const route = Array.isArray(ROUTE) ? ROUTE[0] : ROUTE

      return (
        <LineItem
          key={`${LABEL}-${ICON}`}
          isActive={pathname === route}
          onClick={() => router.push(route)}
          label={LABEL}
          iconLabel={ICON}
          collapse={collapse}
        />
      )
    })

  const mainGroup = groupAssembler(Object
    .values(CONSTS.ROUTES)
    .filter(el => el?.GROUP === 'main'))

  const secondaryGroup = groupAssembler(Object
    .values(CONSTS.ROUTES)
    .filter(el => el?.GROUP === 'secondary'))

  return (
    <nav className='navigation-menu'>
      <VerticalSheets
        isPlain
        collapse={collapse}
      >
        <HeaderArea
          title='Sierra Ferguson'
          isAvatar
          additionalInfo='s.ferguson@gmail.com'
          collapse={collapse}
        />
        <Divider/>
        <div className='navigation-menu__group  horizontal-block vertical-block'>
          {mainGroup}
        </div>
        <Divider/>
        <div className='navigation-menu__group  horizontal-block vertical-block'>
          {secondaryGroup}
        </div>
        <div className='navigation-menu__group  horizontal-block vertical-block toggle'>
          <ToggleSidebar
            collapse={collapse}
            setCollapse={setCollapse}
          />
        </div>
      </VerticalSheets>
    </nav>
  )
}

export default NavMenu

