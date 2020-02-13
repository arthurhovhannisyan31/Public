// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers
// local components
import Icon from "../../icons/icon.component"
// local constants
import CONSTS from "../../../../constants"
// local styles
import './radio.control.style.scss'

const Radio = (
  { isActive,
    handleClick,
    label
  }) => {

  return (
    <button
      type='button'
      onClick={() => !isActive && handleClick(label)}
      className='radio-default'
    >
      {isActive
        ? <Icon
          label='radiobutton-active'
          colorSecondary={CONSTS.COMPONENTS.STYLES.COLORS.MAIN}
        />
        : <Icon
          label='radiobutton-inactive'
        />
      }
      <span
        className='radio-default__label'
      >
        {label}
      </span>
    </button>
  )
}

Radio.defaultProps = {
  isActive: false,
  handleClick: ()=>{},
  label: '',
}

Radio.propTypes = {
  isActive: PropTypes.bool,
  handleClick: PropTypes.func,
  label: PropTypes.string,
}

export default Radio
