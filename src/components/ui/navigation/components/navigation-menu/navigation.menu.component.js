import React, {useState} from 'react'

import {HeaderAreaMock} from "../../elements/header-area"
import Divider from "../../../lines/devider"
import {LineItem, VerticalSheets,  } from "../../elements"

import './navigation.menu.style.scss'
import SubTitle from "../../../../text-containers/sub-title"

const NavigationMenu = () => {

  const [active, setActive] = useState('one')

  return (
    <div  className='navigation-menu'>
      <VerticalSheets
        isPlain
      >
        <HeaderAreaMock/>
        <Divider/>
        <div className='navigation-menu__group'>
          <LineItem
            isActive={active==='one'}
            onClick={() => setActive('one')}
          />
          <LineItem
            isActive={active==='two'}
            onClick={() => setActive('two')}
          />
          <LineItem
            isActive={active==='three'}
            onClick={() => setActive('three')}
          />
          <LineItem
            isActive={active==='four'}
            onClick={() => setActive('four')}
          />
        </div>
        <Divider/>
        <div className='navigation-menu__group'>
          <SubTitle>
           SubTitle
          </SubTitle>
          <LineItem
            isActive={active==='one-sub'}
            onClick={() => setActive('one-sub')}
          />
          <LineItem
            isActive={active==='two-sub'}
            onClick={() => setActive('two-sub')}
          />
        </div>
        <br/>
      </VerticalSheets>
    </div>
  )
}

export default NavigationMenu
