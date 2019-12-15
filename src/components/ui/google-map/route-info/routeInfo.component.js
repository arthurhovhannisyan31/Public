import React from 'react'
import PropTypes from 'prop-types'

import { moneyFormat } from '../../../../services/utils.service'

import './routeInfo.style.scss'

const RouteInfo = ({...props}) => {

  const {
    value,
    isMoneyFormat,
    setCurrentDirection,
    routes
  } = props

  const { arrivalCity, departureCity } = routes[0]

  const newVal = isMoneyFormat ? moneyFormat(value) : value
  const details = isMoneyFormat ? 'р./мес' : 'в месяц'

  return (
    <div className="routeInfo">
      <button
        className="routeInfo-wrap"
        type='button'
        onClick={() => {
          setCurrentDirection([`${arrivalCity.name}`, `${departureCity.name}`])
        }}
      >
        <div className="routeInfo-left">
          <span>{1}</span>
        </div>
        <div className="routeInfo-right">
          <span className="routeInfo-details">
            <span>{newVal}</span>
            <span>{details}</span>
          </span>
        </div>
      </button>
    </div>
  )
}

RouteInfo.defaultProps = {
  isMoneyFormat: null
}

RouteInfo.propTypes = {
  value: PropTypes.number.isRequired,
  isMoneyFormat: PropTypes.number
}

export default RouteInfo
