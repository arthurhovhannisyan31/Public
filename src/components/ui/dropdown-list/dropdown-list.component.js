import React from "react"
import PropTypes from "prop-types"

import Dropdown from "react-dropdown"
import { ArrowDown } from "../icons"

import "./dropdown-list.style.scss"

const DropDownList = ({ options, value, defaultOption, onChange, extraClass = "" }) => {

  return (
    <div className="dropDown">
      <Dropdown
        className={`dropDown-wrap ${extraClass}`}
        options={options}
        value={value || defaultOption}
        onChange={onChange}
        arrowClosed={<ArrowDown/>}
        arrowOpen={<ArrowDown/>}
      />
    </div>
  )
}

DropDownList.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      id: PropTypes.number,
      isHolding: PropTypes.bool,
      label: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.number
    })
  ]).isRequired,
  defaultOption: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      id: PropTypes.number,
      isHolding: PropTypes.bool,
      label: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.number
    })
  ]).isRequired,
  onChange: PropTypes.func.isRequired
}

export default DropDownList
