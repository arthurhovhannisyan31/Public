// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers
// local components
// local constants
import CONSTS from "../../../constants"
// local styles

import './button.style.scss'

/**
 *
 * @param onClick
 * @param children
 * @param disabled
 * @param link
 * @param extraClass
 * @param targetBlank
 * @param color
 * @returns {*}
 * @constructor
 */
const Button = (
  { onClick,
    children,
    disabled,
    link,
    extraClass,
    targetBlank,
    color
  }) => {

  /**
   * Check if provided color value supported in styles
   */
  const colorValue = CONSTS.COMPONENTS.BUTTONS.COLORS.VALUES
    .includes(color) ? color : CONSTS.COMPONENTS.BUTTONS.COLORS.DEFAULT

  /**
   * Build anchor or button component if link value were provided
   * @type {string}
   */
  const Tag = link ? 'a' : 'button'
  const className = `default-button ${extraClass} color-${colorValue}`

  return (
    <Tag
      className={className}

      onClick={onClick}
      disabled={disabled}

      href={link}
      rel="noopener noreferrer"
      target={targetBlank ? '_blank' : '_self'}
    >
      {children}
    </Tag>
  )
}

Button.defaultProps = {
  onClick: null,
  children: null,
  disabled: false,
  link: '',
  extraClass: '',
  targetBlank: false,
  color: 'main'
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  link: PropTypes.string,
  extraClass: PropTypes.string,
  targetBlank: PropTypes.bool,
  color: PropTypes.string
}

export default Button
