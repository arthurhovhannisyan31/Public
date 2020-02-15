// external libraries
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers & components
import Icon from "../../icons/icon.component"
// local constants & styles
import CONSTS from "../../../../constants"
import './checkbox.control.style.scss'

const Checkbox = (
  { label,
    isActive
  }) => {

  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(isActive)
  }, [isActive])

  return (
    <button
      type='button'
      className='checkbox'
      onClick={() => setActive(state => !state)}
    >
      {active
        ? <Icon
          label='checkbox-active'
          colorSecondary={CONSTS.COMPONENTS.STYLES.COLORS.MAIN}
        />
        : <Icon
          label='checkbox-inactive'
        />
      }
      <span
        className='checkbox__label'
      >
        {label}
      </span>
    </button>
  )
}

Checkbox.defaultProps = {
  label: '',
  isActive: false,
}

Checkbox.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool
}

export default Checkbox
