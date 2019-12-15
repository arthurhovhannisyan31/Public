import React from 'react'
import { moneyFormat } from "../../../../services/utils.service"

import './routeInfo-details.style.scss'

const RouteInfoDetails = ({...props}) => {

  const { isMoneyFormat, value } = props

  const lastNumber = +value.toString()[value.toString().length-1]
  const case1 = [1].includes(lastNumber)
  const case234 = [2, 3, 4].includes(lastNumber)

  // eslint-disable-next-line no-nested-ternary
  const detailsWithSuffix =  case1 ? 'поездка' : case234 ? 'поездки' : 'поездок'

  const newVal = isMoneyFormat ? moneyFormat(value) : value
  const details = isMoneyFormat ? '₽' : `${detailsWithSuffix}`

  const content = (
    <span className="routeInfoDetails-wrap">
        <span>{newVal} {details}</span>
        <span> /мес</span>
      </span>
  )

  return (
    <div className="routeInfoDetails">
      { content }
    </div>
  )
}

export default RouteInfoDetails
