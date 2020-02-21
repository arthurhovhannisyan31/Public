// external libraries
import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
// local services & data store
// local containers & components
import Icon from "../../icons/icon.component"
import SubTitle from "../../../text-containers/sub-title"
// local constants & styles
import './line-item.style.scss'

const LineItem = (
  { label,
    iconLabel,
    isActive,
    onClick,
    collapse
  }) => {

  const classNames = ClassNames({
    isActive,
    collapse
  })

  return (
    <button
      type='button'
      className={`line-item ${classNames}`}
      onClick={onClick}
    >
      <div className='line-item__container'>
        <Icon label={iconLabel}/>
        {!collapse && <SubTitle isBold>{label}</SubTitle>}
      </div>
    </button>
  )
}

LineItem.defaultProps = {
  label: 'Item List',
  iconLabel: 'bookmark',
  isActive: false,
  onClick: ()=>{},
  collapse: false,
}

LineItem.propTypes = {
  label: PropTypes.string,
  iconLabel: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  collapse: PropTypes.bool,
}

export default LineItem
