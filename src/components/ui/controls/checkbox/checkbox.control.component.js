import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Icon from "../../icons/icon.component"
import './checkbox.control.style.scss'
import CONSTS from "../../../../constants"

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
      className='checkbox-default'
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
        className='checkbox-default__label'
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
