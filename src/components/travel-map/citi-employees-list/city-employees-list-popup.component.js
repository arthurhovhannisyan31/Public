import React from 'react';

import CityEmployeesList from './city-employees-list.component'
import Popup from "../../../ui/popup"

import './city-employees-list-popup.style.scss'

const CityEmployeesListPopup = ({ ...props}) => {
  const {
    popupTitle,
    setShowCityModal,
    showPopup,
    setCurrentCity,
    setShowDetailsModal,
    elements,
    children
  } = props;

  const content = (
    <Popup
      isOpen
      title={popupTitle}
      onCloseBtn={() => {
        setCurrentCity(false);
        setShowCityModal(false);
        setShowDetailsModal(false);
      }}
    >
      { elements &&
        <CityEmployeesList
          {...props}
        />
      }
      {children}
    </Popup>
  );
  return (
    <div className="cityEmployeesListPopup">
      {showPopup && content}
    </div>
  );
};

export default CityEmployeesListPopup;

