import React from 'react'
import PropTypes from 'prop-types'

import './input.style.scss'

const Input = (
  { extraClassName

  }) => {

  return (
    <div
      className={`input-default ${extraClassName}`}
    >
      <span>Input</span>
      <input type="text" />
    </div>
  )
}

Input.defaultProps = {

}

Input.propTypes = {

}

export default Input
