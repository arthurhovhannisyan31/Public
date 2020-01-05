import React, { useEffect, useRef, useReducer } from 'react';
import { connect } from 'react-redux';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

import {
  getTripsCurrent,
  getTripsFastGrow,
  getTripsMostExpensive,
  getTripsMostWanted,
  getTripsOffices,
  getTripsOverview,
  cleanCurrent,
  moduleName as widgetTravelMapModule
} from './travel-map.reducer';
// eslint-disable-next-line import/no-unresolved
import { moduleName as generalInfoModule } from '../../../redux/general-information.reducer';
// eslint-disable-next-line import/no-unresolved
import {
  modifyCompanyList,
  useWindowWidth
  // eslint-disable-next-line import/no-unresolved
} from '../../../services/utils.service';

import { CityEmployeesListModal } from './citi-employees-list';
// eslint-disable-next-line import/no-unresolved
import { TripDetailsModal } from '../../ui/trip-details';

import {
  CurrentTripsOverlay,
  FastGrowOverlay,
  MostWantedExpensiveOverlay
} from './map-overlays';
// eslint-disable-next-line import/no-unresolved
import { BurgerIcon } from '../../ui/icons';
import TravelMapSkeleton from './travel-map.skeleton';
// eslint-disable-next-line import/no-unresolved
import SelectComponent from '../../ui/select/select.component';

import styles from './googleMapStyles';
import './travel-map.style.scss';

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const dropdownOptions = [
  { label: 'Топ-5 маршрутов по числу командировок', value: 1 },
  { label: 'Топ-5 маршрутов по затратам', value: 2 },
  { label: 'Текущие командировки', value: 3 },
  { label: 'Топ-5 быстрорастущих маршрутов за 6 месяцев', value: 4 }
];

const categoryDefaultOption = dropdownOptions[2];

const options = {
  styles,
  center: {
    lat: 60.916961,
    lng: 88.4
  },
  zoom: 3.3
};

const travelMapReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'setCategory':
      return { ...state, category: payload };
    case 'setCurrentCity':
      return { ...state, currentCity: payload };
    case 'setShowCityModal':
      return { ...state, showCityModal: payload };
    case 'setShowDetailsModal':
      return { ...state, showDetailsModal: payload };
    case 'setShowDetailsPopup':
      return { ...state, showDetailsPopup: payload };
    case 'setCurrentTrip':
      return { ...state, currentTrip: payload };
    case 'setCompanyId':
      return { ...state, selectCompanyId: payload };
    case 'setCurrentDirection':
      return { ...state, currentDirection: payload };
    case 'setCenter':
      return { ...state, center: payload };
    case 'setZoom':
      return { ...state, zoom: payload };
    case 'clearPopups':
      return {
        ...state,
        currentCity: false,
        showDetailsPopup: false,
        currentDirection: []
      };
    default:
      return state;
  }
};

const TravelMapWidget = ({ ...props }) => {
  const {
    // eslint-disable-next-line no-shadow
    getTripsOverview,
    // eslint-disable-next-line no-shadow
    getTripsCurrent,
    // eslint-disable-next-line no-shadow,no-unused-vars
    getTripsFastGrow,
    // eslint-disable-next-line no-shadow
    getTripsMostExpensive,
    // eslint-disable-next-line no-shadow
    getTripsMostWanted,
    // eslint-disable-next-line no-shadow
    getTripsOffices,
    // eslint-disable-next-line no-shadow
    cleanCurrent,
    companyId,
    companyList,
    tripCurrent,
    tripCurrentCollection,
    tripFastGrow,
    tripFastGrowCollection,
    tripMostWanted,
    tripMostWantedCollection,
    tripMostExpensive,
    tripMostExpensiveCollection,
    tripDetailsCollection
  } = props;

  const width = useWindowWidth();
  const width640 = width <= 639;
  const width479 = width <= 479;

  const ref = useRef(null);

  const mapWidth = ref.current ? ref.current.offsetWidth : 0;
  const mapHeight = width479 ? 430 : 700;

  const initialState = {
    category: categoryDefaultOption,
    currentCity: false,
    showCityModal: false,
    showDetailsModal: false,
    showDetailsPopup: false,
    currentTrip: false,
    selectCompanyId: companyId,
    currentDirection: [],
    center: {
      lat: 60.916961,
      lng: 88.4
    },
    zoom: false
  };

  const [state, dispatch] = useReducer(travelMapReducer, initialState);

  const {
    category,
    currentCity,
    showCityModal,
    showDetailsModal,
    showDetailsPopup,
    currentTrip,
    selectCompanyId,
    currentDirection,
    center,
    zoom
  } = state;

  const setCategory = payload => {
    dispatch({ type: 'setCategory', payload });
  };
  const setCurrentCity = payload => {
    dispatch({ type: 'setCurrentCity', payload });
  };
  const setShowCityModal = payload => {
    dispatch({ type: 'setShowCityModal', payload });
  };
  const setShowDetailsModal = payload => {
    dispatch({ type: 'setShowDetailsModal', payload });
  };
  const setShowDetailsPopup = payload => {
    dispatch({ type: 'setShowDetailsPopup', payload });
  };
  const setCurrentTrip = payload => {
    dispatch({ type: 'setCurrentTrip', payload });
  };
  const setCompanyId = payload => {
    dispatch({ type: 'setCompanyId', payload });
  };
  const setCurrentDirection = payload => {
    dispatch({ type: 'setCurrentDirection', payload });
  };
  const clearPopups = () => dispatch({ type: 'clearPopups' });
  const setCenter = payload => dispatch({ type: 'setCenter', payload });
  const setZoom = payload => dispatch({ type: 'setZoom', payload });

  useEffect(() => {
    setCompanyId(companyId);
    setZoom(options.zoom);
  }, [companyId]);

  const elements =
    tripCurrent &&
    currentCity &&
    tripCurrent.filter(el => el.city === currentCity)[0].elements;

  useEffect(() => {
    if (selectCompanyId) {
      switch (category.label) {
        case 'Текущие командировки':
          getTripsCurrent(selectCompanyId, tripCurrentCollection);
          // getTripsOffices(selectCompanyId); //вернуть когда будет готов апи по офисам
          break;
        case 'Топ-5 маршрутов по числу командировок':
          getTripsMostWanted(selectCompanyId, tripMostWantedCollection);
          break;
        case 'Топ-5 маршрутов по затратам':
          getTripsMostExpensive(selectCompanyId, tripMostExpensiveCollection);
          break;
        case 'Топ-5 быстрорастущих маршрутов за 6 месяцев':
          getTripsFastGrow(selectCompanyId, tripFastGrowCollection);
          break;
        default:
          break;
      }
    }
  }, [
    selectCompanyId,
    category,
    getTripsCurrent,
    getTripsOffices,
    getTripsMostWanted,
    getTripsMostExpensive,
    getTripsFastGrow,
    tripCurrentCollection,
    tripMostWantedCollection,
    tripMostExpensiveCollection,
    tripFastGrowCollection
  ]);

  useEffect(() => {
    if (currentTrip) getTripsOverview(currentTrip, tripDetailsCollection);
  }, [currentTrip, getTripsOverview, tripDetailsCollection]);

  const onChangeCompany = company => {
    setCompanyId(company.id);
    clearPopups();
    cleanCurrent();
  };

  const defaultValueCompany = modifyCompanyList(companyList).find(
    item => item.id === selectCompanyId
  );

  const MapSelectors = () => {
    return (
      <>
        <div className="travel-map-select-company">
          <SelectComponent
            searchIndicator
            extraStyles={{
              control: stylesS => ({
                ...stylesS,
                border: 'none',
                borderRadius: '2px',
                background: 'white',
                height: '48px',
                fontSize: '18px',
                boxShadow: 'none',
                paddingLeft: '28px'
              })
            }}
            iconBefore={<BurgerIcon />}
            options={modifyCompanyList(companyList)}
            placeholder="Выберите компанию"
            inputId="widget-map-select-company-id"
            onChange={onChangeCompany}
            value={defaultValueCompany}
          />
        </div>
        <div className="travel-map-select-service">
          <SelectComponent
            placeholder="Выберите сервис"
            inputId="widget-map-select-service"
            className="dropDown"
            options={dropdownOptions}
            defaultValue={categoryDefaultOption}
            value={category || categoryDefaultOption}
            onChange={e => {
              setCategory(e);
              clearPopups();
            }}
          />
        </div>
      </>
    );
  };

  const MapContent = () => {
    switch (category.label) {
      case 'Текущие командировки': {
        return (
          <div>
            {/* вернуть когда будет готов апи по офисам */}
            {/* { tripOffices && */}
            {/* <OfficesOverlay */}
            {/* data={tripOffices} */}
            {/* /> */}
            {/* } */}
            <CurrentTripsOverlay
              currentCity={currentCity}
              setCurrentCity={setCurrentCity}
              setShowCityModal={setShowCityModal}
              showDetailsPopup={showDetailsPopup}
              setShowDetailsPopup={setShowDetailsPopup}
              setShowDetailsModal={setShowDetailsModal}
              currentTrip={currentTrip}
              setCurrentTrip={setCurrentTrip}
              elements={elements}
              setCenter={setCenter}
              zoom={zoom}
              {...props}
            />
          </div>
        );
      }
      case 'Топ-5 маршрутов по числу командировок': {
        return (
          <MostWantedExpensiveOverlay
            data={tripMostWanted}
            currentDirection={currentDirection}
            setCurrentDirection={setCurrentDirection}
          />
        );
      }
      case 'Топ-5 маршрутов по затратам': {
        return (
          <MostWantedExpensiveOverlay
            data={tripMostExpensive}
            currentDirection={currentDirection}
            setCurrentDirection={setCurrentDirection}
          />
        );
      }
      case 'Топ-5 быстрорастущих маршрутов за 6 месяцев': {
        return (
          <FastGrowOverlay
            data={tripFastGrow}
            setCategory={setCategory}
            currentDirection={currentDirection}
            setCurrentDirection={setCurrentDirection}
          />
        );
      }
      default:
        return null;
    }
  };

  const { isLoaded, loadError } = useLoadScript({
    id: 'script-loader',
    googleMapsApiKey
    // add locale (language) here
  });

  const RenderMap = () => {
    // any code on load
    const onLoad = map => {
      map.addListener('zoom_changed', () => {
        setZoom(map.zoom);
      });
    };
    return (
      <GoogleMap
        options={options}
        onLoad={onLoad}
        id="example-map"
        mapContainerStyle={{
          height: `${mapHeight}px`,
          width: `${mapWidth}px`
        }}
        center={center}
        {...props}
      >
        <MapContent />
        <MapSelectors />
      </GoogleMap>
    );
  };

  return (
    <div className="travel-map" ref={ref}>
      {elements && (
        <CityEmployeesListModal
          modalTitle={currentCity}
          isOpen={showCityModal && width640}
          handleCloseModal={() => {
            setShowCityModal(false);
            setTimeout(() => {
              setCurrentCity(false);
            });
          }}
          setShowDetailsModal={setShowDetailsModal}
          setShowDetailsPopup={setShowDetailsPopup}
          city={currentCity}
          elements={elements}
          setCurrentTrip={setCurrentTrip}
        />
      )}
      {elements && (
        <TripDetailsModal
          isOpen={showDetailsModal && width640}
          modalTitle={`Командировка ${currentTrip}`}
          handleCloseModal={() => {
            setShowDetailsModal(false);
            setShowDetailsPopup(false);
          }}
          currentTrip={currentTrip}
          {...props}
        />
      )}
      <div className="travel-map-container">
        {loadError && <div>Map cannot be loaded right now, sorry.</div>}
        {isLoaded ? RenderMap() : <TravelMapSkeleton />}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state[widgetTravelMapModule].loading,
  error: state[widgetTravelMapModule].error,
  companyId: state[generalInfoModule].companyId,
  tripCurrent: state[widgetTravelMapModule].tripCurrent,
  tripCurrentCollection: state[widgetTravelMapModule].tripCurrentCollection,
  tripDetails: state[widgetTravelMapModule].tripDetails,
  tripDetailsCollection: state[widgetTravelMapModule].tripDetailsCollection,
  tripFastGrow: state[widgetTravelMapModule].tripFastGrow,
  tripFastGrowCollection: state[widgetTravelMapModule].tripFastGrowCollection,
  tripMostWanted: state[widgetTravelMapModule].tripMostWanted,
  tripMostWantedCollection:
    state[widgetTravelMapModule].tripMostWantedCollection,
  tripMostExpensive: state[widgetTravelMapModule].tripMostExpensive,
  tripMostExpensiveCollection:
    state[widgetTravelMapModule].tripMostExpensiveCollection,
  tripOffices: state[widgetTravelMapModule].tripOffices,
  tripOfficesCollection: state[widgetTravelMapModule].tripOfficesCollection,
  companyList: state[generalInfoModule].companyList
});

const mapDispatchToProps = {
  getTripsOverview,
  getTripsCurrent,
  getTripsFastGrow,
  getTripsMostExpensive,
  getTripsMostWanted,
  getTripsOffices,
  cleanCurrent
};

export default connect(mapStateToProps, mapDispatchToProps)(TravelMapWidget);
