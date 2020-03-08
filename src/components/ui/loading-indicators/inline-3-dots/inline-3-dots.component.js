// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers & components
// local constants & styles
import './inline-3-dots.style.scss'

const Inline3Dots = ({color}) => {

  return (
    <div
      className='Inline3Dots'
      style={{
        color
      }}
    >
      <span className='Inline3Dots__dot1'/>
      <span className='Inline3Dots__dot2'/>
      <span className='Inline3Dots__dot3'/>
    </div>
  )
}

Inline3Dots.defaultProps = {
  color: 'black'
}

Inline3Dots.propTypes = {
  color: PropTypes.string
}

export default Inline3Dots
