// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers & components
// local constants & styles
import './divider.style.scss'

const Divider = ({vertical}) => {

  return (
    <div className={`divider ${vertical ? 'vertical' : 'horizontal'}`}/>
  )
}

Divider.defaultProps = {
  vertical: false,
}

Divider.propTypes = {
  vertical: PropTypes.bool,
}

export default Divider
