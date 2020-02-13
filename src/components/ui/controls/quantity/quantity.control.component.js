// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
import {quantityHandler} from "../../../../services/utilities.service"
// local containers
// local components
// local constants
// local styles
import './quantity.control.style.scss'

const Quantity = (
  { val,
    limit,
  }) => {

  const {value, exceeded} = quantityHandler({val, limit})
  return (
    <>
      {!!value &&
        <span className={`quality-default exceeded-${exceeded}`}>
          x{value}
        </span>
      }
    </>
  )
}

Quantity.defaultProps = {
  val: null,
  limit: 99,
}

Quantity.propTypes = {
  val: PropTypes.number,
  limit: PropTypes.number,
}

export default Quantity
