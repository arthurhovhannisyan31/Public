// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers
// local components
// local constants
import icons from "./icons.list"
// local styles

const Icon = ({label, fillMain, fillSecondary, fillOpacity}) => {
  const defaultIcon = icons({fillMain, fillSecondary})[0]
  const icon = icons({fillMain, fillSecondary, fillOpacity}).filter(el => el.label === label)[0]
  return (
    <>
      {icon?.svg ?? defaultIcon.svg}
    </>
  )
}

Icon.defaultProps = {
  label: 'placeholder',
  fillMain: 'black',
  fillSecondary: 'black',
  fillOpacity: 0.54
}

Icon.propTypes = {
  label: PropTypes.string,
  fillMain: PropTypes.string,
  fillSecondary: PropTypes.string,
  fillOpacity: PropTypes.number,
}

export default Icon
