import React from 'react'

import womanImg from './Screenshot_20200214_214439.png'
import Mask from "../../elements/mask"
import Icon from "../../../icons/icon.component"

const Avatar = ({src = womanImg}) => {

  return (
    <Mask>
      {src
        ? <img src={src} alt="womanImg"/>
        : <Icon label='avatar'/>
      }
    </Mask>
  )
}

export default Avatar
