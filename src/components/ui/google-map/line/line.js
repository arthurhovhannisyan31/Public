import React from "react"
import PropTypes from "prop-types"
import { Polyline } from "@react-google-maps/api"

const Line = ({ ...props }) => {

  const { arrivalCity, departureCity, strokeWeight } = props

  return (
    <Polyline
      /* eslint-disable-next-line no-unused-vars */
      onLoad={polyline => {
      }}
      path={[
        { lat: arrivalCity.geoLocation.latitude, lng: arrivalCity.geoLocation.longitude },
        { lat: departureCity.geoLocation.latitude, lng: departureCity.geoLocation.longitude }
      ]}
      options={{
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        zIndex: 1
      }}
    />
  )
}

Line.defaultProps = {
  strokeWeight: 4
}

Line.propTypes = {
  strokeWeight: PropTypes.number
}

export default Line
