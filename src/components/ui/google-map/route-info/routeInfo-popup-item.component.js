import React from 'react'
import PropTypes from 'prop-types'

import RouteInfoDetails from "./routeInfo-details.component"

import './routeInfo-popup-item.style.scss'

const RouteInfoPopupItem = ({...props}) => {

  const { id, element: { arrivalCity, departureCity, count, amount }, isMoneyFormat} = props
  const value = count || amount

  const content = (
    <div className="routeInfoPopupItem-wrap">
      <span className="title">
          <span className='nbs'>{departureCity.name}</span><span>&nbsp;&#8212;&nbsp;</span><span className='nbs'>{arrivalCity.name}</span>
      </span>
      <span className="quantity">{id + 1}</span>
      <RouteInfoDetails
        value={value}
        isMoneyFormat={isMoneyFormat}
      />
    </div>
  )

  return (
    <div className="routeInfoPopupItem">
      { content }
    </div>
  )
}

RouteInfoPopupItem.propTypes = {
  id: PropTypes.number.isRequired,
}

export default RouteInfoPopupItem
