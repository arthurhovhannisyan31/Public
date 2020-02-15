import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

import Icon from "../../../icons/icon.component"

import './line-item.style.scss'
import SubTitle from "../../../../text-containers/sub-title"

const LineItem = ({iconLabel, isActive, onClick}) => {

  const classNames = ClassNames({
    isActive
  })

  return (
    <button
      type='button'
      className={`line-item ${classNames}`}
      onClick={onClick}
    >
      <div className='line-item__container'>
        <Icon label={iconLabel}/>
        <SubTitle isBold>Item List</SubTitle>
      </div>
    </button>
  )
}

LineItem.defaultProps = {
  iconLabel: 'bookmark',
  isActive: false,
  onClick: ()=>{},
}

LineItem.propTypes = {
  iconLabel: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
}

export default LineItem
