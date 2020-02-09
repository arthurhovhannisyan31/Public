// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers
// local components
// local constants
import icons from "./icons.list"
// local styles

const Icon = ({label, colorMain, colorSecondary, opacity}) => {
  const defaultIcon = icons({colorMain, colorSecondary})[0]
  const icon = icons({colorMain, colorSecondary, opacity}).filter(el => el.label === label)[0]
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
  opacity: 0.54
}

Icon.propTypes = {
  label: PropTypes.string,
  colorMain: PropTypes.string,
  colorSecondary: PropTypes.string,
  opacity: PropTypes.number,
}

export default Icon
