// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
import {validateColorName} from "../../../../services/utilities.service"
// local containers & components
import ContainedButton from "../contained-button"
// local constants & styles
import './action-button.style.scss'

/**
 *  Action button component
 * @param onCLick
 * @param children
 * @param disabled
 * @param extraClass
 * @param color
 * @param floating
 * @returns {*}
 * @constructor
 */
const ActionButton = (
  { onCLick,
    children,
    disabled,
    extraClass,
    color,
    floating
  }) => {

  /**
   * Check if provided color value supported in styles
   */
  const colorName = validateColorName(color)

  return (
    <ContainedButton
      aria-label='action button'
      type='button'
      extraClass={`action-button ${extraClass} floating-${floating}`}
      color={colorName}
      onClick={onCLick}
      disabled={disabled}
    >
      {children}
    </ContainedButton>
  )
}

ActionButton.defaultProps = {
  onCLick: null,
  children: null,
  disabled: false,
  extraClass: '',
  color: 'main',
  floating: false,
}

ActionButton.propTypes = {
  onCLick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  extraClass: PropTypes.string,
  color: PropTypes.string,
  floating: PropTypes.bool
}

export default ActionButton
