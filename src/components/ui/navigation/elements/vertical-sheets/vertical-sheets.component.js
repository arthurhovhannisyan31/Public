import React from 'react'
import PropTypes from 'prop-types'

import LeftShadow from "./left-shadow"

const VerticalSheets = ({isPlain, children}) => {

  return (
    <>
      { isPlain
        ? children
        : <LeftShadow>
            {children}
          </LeftShadow>
      }
    </>
  )
}

VerticalSheets.defaultProps = {
  isPlain: false,
}

VerticalSheets.propTypes = {
  isPlain: PropTypes.bool
}

export default VerticalSheets
