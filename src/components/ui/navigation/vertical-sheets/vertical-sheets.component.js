// external libraries
import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
// local services & data store
// local containers & components
// local constants & styles
import './vertical-sheets.style.scss'

const VerticalSheets = ({isPlain, children, collapse}) => {
  const classNames = ClassNames({
    isPlain,
    collapse
  })

  return (
    <div className={` vertical-sheets ${classNames}`}>
      {children}
    </div>
  )
}

VerticalSheets.defaultProps = {
  isPlain: false,
  collapse: false,
}

VerticalSheets.propTypes = {
  isPlain: PropTypes.bool,
  collapse: PropTypes.bool,
}

export default VerticalSheets
