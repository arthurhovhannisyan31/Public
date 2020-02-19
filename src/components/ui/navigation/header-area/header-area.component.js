// external libraries
import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
// local services & data store
// local containers & components
import Avatar from "../../avatar"
import {Title} from "../../../text-containers"
import SubTitle from "../../../text-containers/sub-title"
// local constants & styles
import './header-area.style.scss'

const HeaderArea = (
  { title,
    isAvatar,
    additionalInfo,
    collapse,
  }) => {

  const className = ClassNames({
    collapse
  })

  return (
    <div className={`header-area ${className}`}>
      <div className='header-area__container'>
        <div className='header-area__container_avatar'>
          {isAvatar && <Avatar/>}
        </div>
        {!collapse &&
          <div className='header-area__container_info'>
            <Title>{title}</Title>
            <SubTitle>{additionalInfo}</SubTitle>
          </div>
        }
      </div>
    </div>
  )
}

HeaderArea.defaultProps = {
  title: '',
  isAvatar: false,
  additionalInfo: '',
  collapse: false,
}

HeaderArea.propTypes = {
  title: PropTypes.string,
  isAvatar: PropTypes.bool,
  additionalInfo: PropTypes.string,
  collapse: PropTypes.bool,
}

export default HeaderArea
