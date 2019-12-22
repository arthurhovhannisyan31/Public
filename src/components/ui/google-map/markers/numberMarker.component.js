import React from 'react';
import PropTypes from 'prop-types';
import Marker from './marker.component';

import { googleMapCoordinatesConverter, useWindowWidth } from '../../../../services/utils.service'

import './numberMarker.style.scss';

const NumberMarker = (
  {
    value,
    city,
    setShowCityModal,
    setCurrentCity,
    setShowDetailsPopup,
    setCenter,
    position,
    zoom
  }) => {

  const fontSize = value > 99 ? 14 : 20;
  const newValue = value >= 100 ? '99+' : value;
  const width = useWindowWidth();
  const width640 = width <= 639;

  const modifyLatLng = () => {

    let pixelAdjustLat = 0;
    const pixelAdjustLng = 0;

    // todo refactor to something smart
    if (zoom >= 5) pixelAdjustLat = 100;
    if (zoom < 5) pixelAdjustLat = 95;
    if (zoom < 4) pixelAdjustLat = 85;
    if (zoom < 3) pixelAdjustLat = 75;
    if (zoom < 2) pixelAdjustLat = 55;
    if (zoom < 1) pixelAdjustLat = 33;

    const newPosition = googleMapCoordinatesConverter({
      worldCoordinate: position,
      zoom,
      pixelAdjustLat,
      pixelAdjustLng
    });
    if (!width640) setCenter(newPosition)
  };

  return (
    <button
      className="gm-marker"
      type='button'
      onClick={e => {
        modifyLatLng(e);
        setCurrentCity(city);
        setShowCityModal(true);
        setShowDetailsPopup(false);
      }}
    >
      <Marker/>
      <span style={{ fontSize }}>{newValue}</span>
    </button>
  );
};

NumberMarker.propTypes = {
  value: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  setShowCityModal: PropTypes.func.isRequired,
  setCurrentCity: PropTypes.func.isRequired,
  setShowDetailsPopup: PropTypes.func.isRequired
};

export default NumberMarker;
