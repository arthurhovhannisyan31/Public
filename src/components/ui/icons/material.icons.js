import React from 'react'
import PropTypes from 'prop-types'
import {iconsMaterial} from "../../../constants"

const MaterialIcon = ({label, fill, fillOpacity}) => {
  const defaultIcon = iconsMaterial({fill})[0]
  const icon = iconsMaterial({fill, fillOpacity}).filter(el => el.label === label)[0]
  return (
    <>
      {icon?.svg ?? defaultIcon.svg}
    </>
  )
}

MaterialIcon.defaultProps = {
  label: 'placeholder',
  fill: 'black',
  fillOpacity: 0.54
}

MaterialIcon.propTypes = {
  label: PropTypes.string,
  fill: PropTypes.string,
  fillOpacity: PropTypes.number,
}

export default MaterialIcon
