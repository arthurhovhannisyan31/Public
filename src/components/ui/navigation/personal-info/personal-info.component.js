import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers & components
import Avatar from "../../avatar"
import {Title} from "../../../text-containers"
import SubTitle from "../../../text-containers/sub-title"
// local constants & styles
import './personal-info.style.scss'

const PersonalInfo = (
  { title,
    isAvatar,
    additionalInfo,
    collapse,
  }) => {

  return (
    <div className='personal-info'>
      <div className='personal-info__container'>
        <div className='personal-info__container_avatar'>
          {isAvatar && <Avatar/>}
        </div>
        {!collapse &&
          <div className='personal-info__container_info'>
            <Title>{title}</Title>
            <SubTitle>{additionalInfo}</SubTitle>
          </div>
        }
      </div>
    </div>
  )
}

PersonalInfo.defaultProps = {
  title: '',
  isAvatar: false,
  additionalInfo: '',
  collapse: false,
}

PersonalInfo.propTypes = {
  title: PropTypes.string,
  isAvatar: PropTypes.bool,
  additionalInfo: PropTypes.string,
  collapse: PropTypes.bool,
}

export default PersonalInfo
