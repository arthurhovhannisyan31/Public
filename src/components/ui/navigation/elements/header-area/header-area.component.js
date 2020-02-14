import React from 'react'
import PropTypes from 'prop-types'

import './header-area.style.scss'
import Avatar from "../../../avatar"
import Title from "../../../title"

const HeaderArea = (
  { title,
    isAvatar,
    additionalInfo,
  }) => {

  return (
    <div className='header-area-default'>
      <div className='header-area-default__container'>
        <div className='header-area-default__container_avatar'>
          {isAvatar && <Avatar/>}
        </div>
        <div className='header-area-default__container_info'>
          <Title
            value={title}
          />
          <span className='header-area-default__container_add-info'>
            {additionalInfo}
          </span>
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
