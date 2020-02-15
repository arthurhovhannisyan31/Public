import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

import './vertical-sheets.style.scss'

const VerticalSheets = ({isPlain, children}) => {

  const classNames = ClassNames({
    isPlain
  })

  return (
    <div className={` vertical-sheets ${classNames}`}>
      {children}
    </div>
  )
}

VerticalSheets.defaultProps = {
  isPlain: false,
}

VerticalSheets.propTypes = {
  isPlain: PropTypes.bool
}

export default VerticalSheets
