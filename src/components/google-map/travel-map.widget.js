import React, { useEffect, useRef, useState } from "react"
import { connect } from "react-redux"
import Dropdown from "react-dropdown"
import { GoogleMap, useLoadScript } from "@react-google-maps/api"

import {
  getTripsCurrent,
  getTripsFastGrow,
  getTripsMostExpensive,
  getTripsMostWanted,
  getTripsOffices,
  getTripsOverview,
  moduleName as widgetTravelMapModule
} from "./travel-map.reducer"
import { modifyCompanyList, useWindowWidth } from "../../../services/utils.service"

import { CityEmployeesListModal } from "./citi-employees-list"
import { TripDetailsModal } from "../../ui/trip-details"

import { CurrentTripsOverlay, FastGrowOverlay, MostWantedExpensiveOverlay } from "./map-overlays"
import { ArrowDown, BurgerIcon } from "../../ui/icons"
import TripDetailsSkeleton from "./travel-map.skeleton"

import styles from "./googleMapStyles"
import "./travel-map.style.scss"
import { moduleName as generalInfoModule } from "../../../redux/general-information.reducer"
import SelectComponent from "../../ui/select/select.component"

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY

const dropdownOptions = [
  "Топ-5 маршрутов по числу командировок",
  "Топ-5 маршрутов по затратам",
  "Текущие командировки",
  "Топ-5 быстрорастущих маршрутов за 6 месяцев"]

const defaultOption = dropdownOptions[2]

const options = {
  styles,
  center: {
    lat: 55.751244,
    lng: 37.618423
  },
  zoom: 10
}

const TravelMapWidget = ({ ...props }) => {
  const {
    // eslint-disable-next-line no-shadow
    getTripsCurrent,
    // eslint-disable-next-line no-shadow
    getTripsOverview,
    // eslint-disable-next-line no-shadow
    getTripsFastGrow,
    // eslint-disable-next-line no-shadow
    getTripsMostWanted,
    // eslint-disable-next-line no-shadow
    getTripsMostExpensive,
    // eslint-disable-next-line no-shadow
    getTripsOffices,
    tripMapData,
    companyId,
    tripFastGrow,
    tripMostWanted,
    tripMostExpensive,
    companyList
    // tripOffices
  } = props

  const width = useWindowWidth()
  const width640 = width <= 639
  const width479 = width <= 479

  const ref = useRef(null)

  const mapWidth = ref.current ? ref.current.offsetWidth : 0
  const mapHeight = width479 ? 430 : 700

  const [category, setCategory] = useState(defaultOption) // category name string
  const [currentCity, setCurrentCity] = useState(false) // city name string
  const [showCityModal, setShowCityModal] = useState(false) // boolean
  const [showDetailsModal, setShowDetailsModal] = useState(false) // boolean
  const [showDetailsPopup, setShowDetailsPopup] = useState(false) // city name string
  const [currentTrip, setCurrentTrip] = useState(false) // trip number
  const [selectCompanyId, setCompanyId] = useState(companyId)

  useEffect(() => {
    setCompanyId(companyId)
  }, [setCompanyId, companyId])

  const [currentDirection, setCurrentDirection] = useState([]) // array of string

  const elements =
    tripMapData &&
    currentCity &&
    tripMapData.filter(el => el.city === currentCity)[0].elements

  useEffect(() => {
    if (selectCompanyId) {
      getTripsCurrent(selectCompanyId)
      getTripsOffices(selectCompanyId)
    }
  }, [selectCompanyId, getTripsCurrent, getTripsOffices])

  useEffect(() => {
    if (currentTrip) getTripsOverview(currentTrip)
  }, [currentTrip, getTripsOverview])

  useEffect(() => {
    if (selectCompanyId) {
      getTripsFastGrow(selectCompanyId)
      getTripsMostWanted(selectCompanyId)
      getTripsMostExpensive(selectCompanyId)
    }
  }, [selectCompanyId, getTripsFastGrow, getTripsMostWanted, getTripsMostExpensive])

  const onChangeCompany = (company) => {
    setCompanyId(company.id)
  }

  const defaultValueCompany = modifyCompanyList(companyList).find(item => item.id === selectCompanyId)

  const MapContent = () => {
    switch (category) {
      case "Текущие командировки": {
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
              {...props}
            />
          </div>
        )
      }
      case "Топ-5 маршрутов по числу командировок": {
        return (
          <MostWantedExpensiveOverlay
            category={category}
            data={tripMostWanted}
            currentDirection={currentDirection}
            setCurrentDirection={setCurrentDirection}
          />
        )
      }
      case "Топ-5 маршрутов по затратам": {
        return (
          <MostWantedExpensiveOverlay
            category={category}
            data={tripMostExpensive}
            currentDirection={currentDirection}
            setCurrentDirection={setCurrentDirection}
          />
        )
      }
      case "Топ-5 быстрорастущих маршрутов за 6 месяцев": {
        return (
          <FastGrowOverlay
            setCategory={setCategory}
            category={category}
            data={tripFastGrow}
            currentDirection={currentDirection}
            setCurrentDirection={setCurrentDirection}
          />
        )
      }
      default:
        return null
    }
  }

  const { isLoaded, loadError } = useLoadScript({
    id: "script-loader",
    googleMapsApiKey
  })
  const RenderMap = () => {

    const onLoad = () => {
      // any code on load
    }

    return (
      <GoogleMap
        options={options}
        onLoad={onLoad}
        id='example-map'
        mapContainerStyle={{
          height: `${mapHeight}px`,
          width: `${mapWidth}px`
        }}
        {...props}
      >
        <div className="travel-map-select-company">
          <SelectComponent
            searchIndicator
            extraStyles={{
              control: stylesS => ({
                ...stylesS,
                border: "none",
                borderRadius: "2px",
                background: "white",
                height: "48px",
                fontSize: "18px",
                boxShadow: "none",
                paddingLeft: "28px"
              })
            }}
            iconBefore={<BurgerIcon/>}
            options={modifyCompanyList(companyList)}
            placeholder="Выберите компанию"
            inputId="widget-map-select-company-id"
            onChange={onChangeCompany}
            value={defaultValueCompany}
          />

        </div>
        <div className="dropDownWrap">
          <Dropdown
            className="dropDown"
            options={dropdownOptions}
            value={category || defaultOption}
            onChange={({ value }) => {
              setCategory(value)
              setCurrentCity(false)
              setShowDetailsPopup(false)
              setCurrentDirection([])
            }}
            arrowClosed={<ArrowDown/>}
            arrowOpen={<ArrowDown/>}
          />
        </div>
        <MapContent/>
      </GoogleMap>
    )
  }

  return (
    <div className="travel-map" ref={ref}>
      {elements &&
      <CityEmployeesListModal
        modalTitle={currentCity}
        isOpen={showCityModal && width640}
        handleCloseModal={() => {
          setShowCityModal(false)
          setTimeout(() => {
            setCurrentCity(false)
          })
        }}
        setShowDetailsModal={setShowDetailsModal}
        setShowDetailsPopup={setShowDetailsPopup}
        city={currentCity}
        elements={elements}
        setCurrentTrip={setCurrentTrip}
      />
      }
      {elements &&
      <TripDetailsModal
        isOpen={showDetailsModal && width640}
        modalTitle={`Командировка ${currentTrip}`}
        handleCloseModal={() => {
          setShowDetailsModal(false)
          setShowDetailsPopup(false)
        }}
        currentTrip={currentTrip}
        {...props}
      />
      }
      <div className="travel-map-container">
        {loadError && <div>Map cannot be loaded right now, sorry.</div>}
        {isLoaded
          ? RenderMap()
          : <TripDetailsSkeleton
            height={`${mapHeight}px`}
            width={`${mapWidth}px`}
          />}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state[widgetTravelMapModule].loading,
  error: state[widgetTravelMapModule].error,
  companyId: state[generalInfoModule].companyId,
  tripMapData: state[widgetTravelMapModule].tripMapData,
  tripDetailsData: state[widgetTravelMapModule].tripDetailsData,
  tripFastGrow: state[widgetTravelMapModule].tripFastGrow,
  tripMostWanted: state[widgetTravelMapModule].tripMostWanted,
  tripMostExpensive: state[widgetTravelMapModule].tripMostExpensive,
  tripOffices: state[widgetTravelMapModule].tripOffices,
  companyList: state[generalInfoModule].companyList
})

const mapDispatchToProps = {
  getTripsCurrent,
  getTripsOverview,
  getTripsFastGrow,
  getTripsMostWanted,
  getTripsMostExpensive,
  getTripsOffices
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelMapWidget)
