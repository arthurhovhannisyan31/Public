// external libraries
import React from 'react'
// local services & data store
import {useRouter} from "../../../../../services/utilities.service"
// local containers & components
import {HeaderAreaMock} from "../../elements/header-area"
import Divider from "../../../lines/devider"
import {LineItem, VerticalSheets,  } from "../../elements"
import SubTitle from "../../../../text-containers/sub-title"
// local constants & styles
import CONSTS from "../../../../../constants"
import './navigation.menu.style.scss'

const NavigationMenu = () => {
  const router =  useRouter()
  const {location: {pathname}} = router

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
    <div  className='navigation-menu'>
      <VerticalSheets
        isPlain
      >
        <HeaderAreaMock/>
        <Divider/>
        <div className='navigation-menu__group'>
          {mainGroup}
        </div>
        <Divider/>
        <div className='navigation-menu__group'>
          <SubTitle>
           SubTitle
          </SubTitle>
          {secondaryGroup}
        </div>
        <br/>
      </VerticalSheets>
    </div>
  )
}

export default NavigationMenu
