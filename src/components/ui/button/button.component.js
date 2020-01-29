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
 *
 * @param onClick
 * @param color
 * @param background
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
    background,
    children,
    disabled,
    link,
    extraClass,
    targetBlank
  }) => {

  const Tag = link ? Link : 'button'
  const className = `default-button ${extraClass} ${disabled && 'disabled'}`

  return (
    <Tag
      className={className}
      style={{color, background}}

      onClick={onClick}
      disabled={disabled}

      to={link}
      rel="noopener noreferrer"
      target={targetBlank ? '_self' : '_blank'}
    >
      {children}
    </Tag>
  )
}

Button.defaultProps = {
  onClick: null,
  color: '',
  background: '',
  children: null,
  disabled: false,
  link: '',
  extraClass: '',
  targetBlank: false
}

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  link: PropTypes.string,
  extraClass: PropTypes.string,
  targetBlank: PropTypes.bool
}

export default Button
