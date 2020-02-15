import React from 'react'
import PropTypes from 'prop-types'

import './sub-title.style.scss'

const SubTitle = ({children, isBold}) => {

  return (
    <span
      className='sub-title'
      style={{
        fontWeight: isBold ? 'bold' : 'normal'
      }}
    >{children}</span>
  )
}

SubTitle.defaultProps = {
  children: null,
  isBold: false,
}

SubTitle.propTypes = {
  children: PropTypes.node,
  isBold: PropTypes.bool,
}

export default SubTitle
