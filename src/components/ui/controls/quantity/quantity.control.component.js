// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers & components
import {quantityHandler} from "../../../../services/utilities.service"
// local constants & styles
import './quantity.control.style.scss'

const Quantity = (
  { val,
    limit,
  }) => {

  const {value, exceeded} = quantityHandler({val, limit})
  return (
    <>
      {!!value &&
        <span className={`quality exceeded-${exceeded}`}>
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
