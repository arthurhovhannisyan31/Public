// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers & components
import icons from "./icons.list"
// local constants & styles

const Icon = (
  { label,
    colorMain,
    colorSecondary,
    opacityMain,
    opacitySecondary
  }) => {
  const defaultIcon = icons({colorMain, colorSecondary})[0]
  const icon = icons({colorMain, colorSecondary, opacityMain, opacitySecondary}).filter(el => el.label === label)[0]
  return (
    <>
      {icon?.svg ?? defaultIcon.svg}
    </>
  )
}

Icon.defaultProps = {
  label: 'placeholder',
  colorMain: 'black',
  colorSecondary: 'black',
  opacityMain: 0.5,
  opacitySecondary: 0.5,
}

Icon.propTypes = {
  label: PropTypes.string,
  colorMain: PropTypes.string,
  colorSecondary: PropTypes.string,
  opacityMain: PropTypes.number,
  opacitySecondary: PropTypes.number,
}

export default Icon
