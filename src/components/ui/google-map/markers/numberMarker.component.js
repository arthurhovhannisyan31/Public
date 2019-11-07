import React from "react"
import PropTypes from "prop-types"
import Marker from "./marker.component"

import "./numberMarker.style.scss"

const NumberMarker = (
  {
    value,
    city,
    setShowCityModal,
    setCurrentCity,
    setShowDetailsPopup
  }) => {

  const fontSize = value > 99 ? 14 : 20
  const newValue = value >= 100 ? "99+" : value

  return (
    <button
      className="gm-marker"
      type='button'
      onClick={() => {
        setCurrentCity(city)
        setShowCityModal(true)
        setShowDetailsPopup(false)
      }}
    >
      <Marker/>
      <span style={{ fontSize }}>{newValue}</span>
    </button>
  )
}

NumberMarker.propTypes = {
  value: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  setShowCityModal: PropTypes.func.isRequired,
  setCurrentCity: PropTypes.func.isRequired,
  setShowDetailsPopup: PropTypes.func.isRequired
}

export default NumberMarker
