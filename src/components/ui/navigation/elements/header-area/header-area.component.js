import React from 'react'
import PropTypes from 'prop-types'

import Avatar from "../../../avatar"
import {Title} from "../../../../text-containers"
import SubTitle from "../../../../text-containers/sub-title"

import './header-area.style.scss'

const HeaderArea = (
  { title,
    isAvatar,
    additionalInfo,
  }) => {

  return (
    <div className='header-area'>
      <div className='header-area__container'>
        <div className='header-area__container_avatar'>
          {isAvatar && <Avatar/>}
        </div>
        <div className='header-area__container_info'>
          <Title>{title}</Title>
          <SubTitle>{additionalInfo}</SubTitle>
        </div>
      </div>
    </div>
  )
}

HeaderArea.defaultProps = {
  title: '',
  isAvatar: false,
  additionalInfo: '',
}

HeaderArea.propTypes = {
  title: PropTypes.string,
  isAvatar: PropTypes.bool,
  additionalInfo: PropTypes.string,
}

export default HeaderArea
