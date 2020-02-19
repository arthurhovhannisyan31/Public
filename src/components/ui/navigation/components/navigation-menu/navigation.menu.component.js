// external libraries
import React, {useContext} from 'react'
// local services & data store
import {useRouter} from "../../../../../services/utilities.service"
import {NavMenuContext} from '../../../../../contexts/nav-menu.context'
// local containers & components
import Divider from "../../../lines/devider"
import {LineItem, VerticalSheets} from "../../elements"
import HeaderArea from "../../elements/header-area/header-area.component"
import ToggleSidebar from "../../elements/toggle-sidebar"
// local constants & styles
import CONSTS from "../../../../../constants"
import './navigation.menu.style.scss'


const NavigationMenu = () => {
  const router =  useRouter()
  const {location: {pathname}} = router
  const navMenuContext = useContext(NavMenuContext)
  const {collapse, setCollapse} = navMenuContext

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
      .filter(el => el?.GROUP === 'main')
  )
  const secondaryGroup = groupAssembler(Object
      .values(CONSTS.ROUTES)
      .filter(el => el?.GROUP === 'secondary')
  )
  return (
    <div  className='navigation-menu horizontal-block'>
      <VerticalSheets
        isPlain
      >
        <HeaderArea
          title='Sierra Ferguson'
          isAvatar
          additionalInfo='s.ferguson@gmail.com'
          collapse={collapse}
        />
        <Divider/>
        <div className='navigation-menu__group'>
          {mainGroup}
        </div>
        <Divider/>
        <div className='navigation-menu__group'>
          {secondaryGroup}
        </div>
        <div className='navigation-menu__group'>
          <ToggleSidebar
            collapse={collapse}
            setCollapse={setCollapse}
          />
        </div>
      </VerticalSheets>
    </div>
  )
}

export default NavigationMenu
