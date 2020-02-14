import React from 'react'
import PropTypes from 'prop-types'

import './mask.style.scss'

const Mask = ({children, width, height}) => {

  const style = {
      width,
      height
  }

  return (
    <div
      className='mask-default'
      style={style}
    >
      <div className='mask-default__container'>
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
