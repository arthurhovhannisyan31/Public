import React from "react"
import PropTypes from "prop-types"
import { OverlayView } from "@react-google-maps/api"
import { CityEmployeesListPopup } from "../citi-employees-list"
import { TripDetailsPopup } from "../../../ui/trip-details"
import { NumberMarker } from "../../../ui/google-map/markers"

const CurrentTripsOverlay = ({ ...props }) => {
  const {
    currentCity,
    setCurrentCity,
    tripMapData,
    setShowCityModal,
    showDetailsPopup,
    setShowDetailsPopup,
    setShowDetailsModal,
    currentTrip,
    setCurrentTrip,
    elements,
    tripDetailsData
  } = props

  if (!tripMapData) return null

  return tripMapData.map(el => {

      return (
        <OverlayView
          key={`${el}-${el.lat}`}
          position={{
            lat: el.lat,
            lng: el.lng
          }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div className="overlayViewWrap">
            <CityEmployeesListPopup
              elements={elements}
              city={el.city}
              popupTitle={el.city}
              setShowCityModal={setShowCityModal}
              showPopup={currentCity === el.city}
              setCurrentCity={setCurrentCity}
              setShowDetailsModal={setShowDetailsModal}
              setShowDetailsPopup={setShowDetailsPopup}
              setCurrentTrip={setCurrentTrip}
              {...props}
            />
            <TripDetailsPopup
              showDetails={
                showDetailsPopup === el.city &&
                currentCity === el.city
              }
              setShowDetailsPopup={setShowDetailsPopup}
              setShowDetailsModal={setShowDetailsModal}
              currentTrip={currentTrip}
              tripDetailsData={tripDetailsData}
              {...props}
            />
            <NumberMarker
              value={el.quantity}
              city={el.city}
              setCurrentCity={setCurrentCity}
              setShowCityModal={setShowCityModal}
              setShowDetailsPopup={setShowDetailsPopup}
              {...props}
            />
          </div>
        </OverlayView>
      )
    }
  )
}

CurrentTripsOverlay.defaultProps = {
  tripMapData: [{
    city: "",
    elements: [{
      arrivalCity: {
        cityId: 0,
        name: "",
        geoLocation: {
          latitude: 0,
          longitude: 0
        }
      },
      businessTripNumber: 0,
      journeyNumber: 0,
      profileId: 0,
      travellerFirstName: "",
      travellerLastName: "",
      travellerMiddleName: ""
    }],
    lat: 0,
    lng: 0,
    quantity: 0
  }]
}

CurrentTripsOverlay.propTypes = {
  currentCity: PropTypes.oneOfType([
    PropTypes.bool, PropTypes.string
  ]),
  setCurrentCity: PropTypes.func.isRequired,
  tripMapData: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string,
      elements: PropTypes.arrayOf(
        PropTypes.shape({
          arrivalCity: PropTypes.shape({
            cityId: PropTypes.number,
            name: PropTypes.string,
            geoLocation: PropTypes.shape({
              latitude: PropTypes.number,
              longitude: PropTypes.number
            })
          }),
          businessTripNumber: PropTypes.number,
          journeyNumber: PropTypes.number,
          profileId: PropTypes.number,
          travellerFirstName: PropTypes.string,
          travellerLastName: PropTypes.string,
          travellerMiddleName: PropTypes.string
        })
      ),
      lat: PropTypes.number,
      lng: PropTypes.number,
      quantity: PropTypes.number
    })
  ),
  setShowCityModal: PropTypes.func.isRequired,
  showDetailsPopup: PropTypes.oneOfType([
    PropTypes.bool, PropTypes.string
  ]),
  setShowDetailsPopup: PropTypes.func.isRequired,
  setShowDetailsModal: PropTypes.func.isRequired,
  currentTrip: PropTypes.oneOfType([
    PropTypes.bool, PropTypes.number
  ]),
  setCurrentTrip: PropTypes.func.isRequired
}

export default CurrentTripsOverlay
