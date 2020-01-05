import React from 'react';
import PropTypes from 'prop-types';
import CustomScroll from 'react-custom-scroll';
// eslint-disable-next-line import/no-unresolved
import Button from '../../../ui/button';

import './citi-employees-list.style.scss';
import './rcs-custom-scroll.style.scss';
// eslint-disable-next-line import/no-unresolved
import ArrowTopRight from '../../../ui/icons/arrow-top-right';

const CityEmployeesList = ({
  setShowDetailsModal,
  city,
  setShowDetailsPopup,
  elements,
  currentCity,
  setCurrentTrip
}) => {
  const EmployeesList = (
    // eslint-disable-next-line no-shadow
    { elements }
  ) => {
    const items = elements.map((el, id) => (
      <EmployeesItem
        /* eslint-disable-next-line react/no-array-index-key */
        key={`${el}-${id}`}
        name={`${el.travellerLastName} ${el.travellerFirstName}`}
        tripNumber={el.businessTripNumber}
      />
    ));
    return (
      <CustomScroll>
        <ul>{items}</ul>
      </CustomScroll>
    );
  };

  const EmployeesItem = ({ name, tripNumber }) => {
    return (
      <li>
        <button
          type="button"
          onClick={() => {
            setShowDetailsModal(true);
            setShowDetailsPopup(city);
            setCurrentTrip(tripNumber);
          }}
        >
          {name}
        </button>
      </li>
    );
  };

  return (
    <div className="cityEmployeesList">
      <span>В командировке</span>
      {city && <EmployeesList elements={elements.slice(0, 20)} />}
      <Button extraClass="cityEmployeesList__button">
        <a
          href={`/trips/journeys/journeys?personal=false&Q.CityTo=${currentCity}&status=all`}
        >
          Показать всех
          <ArrowTopRight fill="#5D6C74" />
        </a>
      </Button>
    </div>
  );
};

CityEmployeesList.propTypes = {
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
  ).isRequired
};

export default CityEmployeesList;
