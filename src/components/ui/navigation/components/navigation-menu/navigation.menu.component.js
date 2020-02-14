import React from 'react'

import './navigation.menu.style.scss'
import VerticalSheets from "../../elements/vertical-sheets"
import {HeaderAreaMock} from "../../elements/header-area"
import Divider from "../../../lines/devider"

const NavigationMenu = () => {

  return (
    <div  className='navigation-menu-default'>
      <VerticalSheets>
        <HeaderAreaMock/>
        <Divider/>
        <span>Item list</span>
        <Divider/>
        <span>Item list</span>
      </VerticalSheets>
    </div>
  )
}

export default NavigationMenu
