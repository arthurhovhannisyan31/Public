// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers & components
import Icon from "../../icons/icon.component"
// local constants & styles
import './filter.control.style.scss'

const Filter = (
  { isActive,
    label
  }) => {

  return (
    <button
      type='button'
      className='filter'
    >
      { isActive
        ? <Icon
          label='filter-funnel-inactive'
        />
        : <Icon
        label='filter-funnel-active'
      />
      }
      <span
        className='filter__label'
      >
        {label}
      </span>
    </button>
  )
}

Filter.defaultProps = {
  isActive: false,
  label: '',
}

Filter.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string,
}

export default Filter
