import React from 'react';
import PropTypes from 'prop-types';
import { OverlayView } from "@react-google-maps/api"

import { CircleMarker } from '../markers';
import Line from '../line';
import { RouteInfo, RouteInfoPopup } from "../route-info"

const LineSegment = (
  { currentDirection,
    setCurrentDirection,
    routes,
    volume,
    strokeWeight,
    ...props
  }) => {

  const { arrivalCity, departureCity, count, amount } = routes[0];

  const value = amount || count;

  const routeInfoGeo = () => {
    const lat = (arrivalCity.geoLocation.latitude + departureCity.geoLocation.latitude) / 2;
    const lng = (arrivalCity.geoLocation.longitude + departureCity.geoLocation.longitude) / 2;

    return {
      latitude: lat,
      longitude: lng
    }
  };

  const routeInfoData = {
    type: 'money',
    value: 1,
    geoLocation: routeInfoGeo()
  };

  return (
    <>
      <Line
        arrivalCity={arrivalCity}
        departureCity={departureCity}
        strokeWeight={strokeWeight}
      />
      <OverlayView
        key={`${arrivalCity.geoLocation.latitude}`}
        position={{
          lat: arrivalCity.geoLocation.latitude,
          lng: arrivalCity.geoLocation.longitude
        }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <CircleMarker/>
      </OverlayView>
      <OverlayView
        key={`${departureCity.geoLocation.latitude}`}
        position={{
          lat: departureCity.geoLocation.latitude,
          lng: departureCity.geoLocation.longitude
        }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <CircleMarker/>
      </OverlayView>
      <OverlayView
        key={`${routeInfoData.latitude}`}
        position={{
          lat: routeInfoData.geoLocation.latitude,
          lng: routeInfoData.geoLocation.longitude
        }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <>
          < RouteInfo
            value={value}
            isMoneyFormat={amount}
            routes={routes}
            setCurrentDirection={setCurrentDirection}
            {...props}
          />
          <RouteInfoPopup
            value={value}
            isMoneyFormat={amount}
            setCurrentDirection={setCurrentDirection}
            routes={routes}
            isOpen={currentDirection.includes(arrivalCity.name) && currentDirection.includes(departureCity.name)}
            {...props}
          />
        </>
      </OverlayView>
    </>
  )
};

LineSegment.defaultProps = {
  count: null,
  amount: null,
  arrivalCity: {
    cityId: 0,
    name: '',
    geoLocation: {
      latitude: 0,
      longitude: 0
    }
  },
  departureCity: {
  cityId: 0,
    name: '',
    geoLocation: {
    latitude: 0,
      longitude: 0
  }
}
};

LineSegment.propTypes = {
  arrivalCity: PropTypes.shape({
    cityId: PropTypes.number,
    name: PropTypes.string,
    geoLocation: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    })
  }),
  departureCity: PropTypes.shape({
    cityId: PropTypes.number,
    name: PropTypes.string,
    geoLocation: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    })
  }),
  count: PropTypes.number,
  amount: PropTypes.number
};

export default LineSegment

