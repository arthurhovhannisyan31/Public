// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers
// local components
// local constants
import icons from "./icons.list"
// local styles

const Icon = ({label, fill, fillOpacity}) => {
  const defaultIcon = icons({fill})[0]
  const icon = icons({fill, fillOpacity}).filter(el => el.label === label)[0]
  return (
    <>
      {icon?.svg ?? defaultIcon.svg}
    </>
  )
}

Icon.defaultProps = {
  label: 'placeholder',
  fill: 'black',
  fillOpacity: 0.54
}

Icon.propTypes = {
  label: PropTypes.string,
  fill: PropTypes.string,
  fillOpacity: PropTypes.number,
}

export default Icon
