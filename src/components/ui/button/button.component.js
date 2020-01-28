// external libraries
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// local services & data store
// local containers
// local components
// local constants
// local styles

import './button.style.scss'

/**
 * Компонент кнопки
 * @param onClick
 * @param color
 * @param children
 * @param disabled
 * @param link
 * @param extraClass
 * @param targetBlank
 * @returns {*}
 * @constructor
 */
const Button = (
  { onClick,
    color,
    children,
    disabled,
    link,
    extraClass,
    targetBlank
  }) => {

  const style = {
    color
  }

  const Tag = link ? 'Link' : 'button'

  return (
    <Tag
      rel="noopener noreferrer"
      className={`default-button ${extraClass}`}
      onClick={onClick}
      disabled={disabled}
      target={targetBlank ? '_self' : '_blank'}
      style={style}
    >
      {children}
    </Tag>
  )
}


Button.defaultProps = {
  onClick: null,
  color: null,
  children: null,
  disabled: false,
  link: null,
  extraClass: null,
  targetBlank: false
}

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  link: PropTypes.string,
  extraClass: PropTypes.string,
  targetBlank: PropTypes.bool
}

export default Button
