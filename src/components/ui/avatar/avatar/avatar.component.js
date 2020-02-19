// external libraries
import React from 'react'
// local services & data store
// local containers & components
import Mask from "../mask"
import Icon from "../../icons/icon.component"
// local constants & styles
import womanImg from './Screenshot_20200214_214439.png'

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
