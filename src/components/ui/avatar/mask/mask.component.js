// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers & components
// local constants & styles
import './mask.style.scss'

const Mask = ({children, width, height}) => {
  const style = {
      width,
      height
  }
  return (
    <div
      className='mask'
      style={style}
    >
      <div className='mask__container'>
        {children}
      </div>
    </div>
  )
}

Mask.defaultProps = {
  width: 40,
  height: 40
}

Mask.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

export default Mask
