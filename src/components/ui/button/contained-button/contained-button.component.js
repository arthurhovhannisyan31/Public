// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
import {validateColorName} from "../../../../services/utilities.service"
// local containers
// local components
// local constants
// local styles
import './contained-button.style.scss'

/**
 * Contained button component
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
const ContainedButton = (
  { onClick,
    children,
    disabled,
    link,
    extraClass,
    targetBlank,
    color,
  }) => {

  /**
   * Check if provided color value supported in styles
   */
  const colorName = validateColorName(color)

  /**
   * Build anchor or button component if link value were provided
   * @type {string}
   */
  const Tag = link ? 'a' : 'button'
  const className = `contained-button ${extraClass} color-${colorName}`

  return (
    <Tag
      aria-label='contained button'
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

ContainedButton.defaultProps = {
  onClick: null,
  children: null,
  disabled: false,
  link: '',
  extraClass: '',
  targetBlank: false,
  color: 'main'
}

ContainedButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  link: PropTypes.string,
  extraClass: PropTypes.string,
  targetBlank: PropTypes.bool,
  color: PropTypes.string
}

export default ContainedButton
