// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers & components
import Select from '../../select'
import Input from "../../input/input.component"
// local constants & styles
import './hotels-filter.style.scss'

const HotelsFilter = (
  { options,
    id,
    setId,
    length,
    setLength,
    filters,
    setFilters
  }) => {

  return (
    <div className='hotels-filter'>
      <div className='hotels-filter__container'>
        <Input
          label='Next element id'
          value={id}
          onChange={setId}
          helperText='Numbers only'
          extraClassName='next-id'
          type='number'
          isDisabled
        />
        <Input
          label='Quantity for lazy load'
          value={length}
          // haven't separated input component to string and number yet
          // so coercing string value to number
          onChange={val => setLength(+val)}
          helperText='Numbers only'
          extraClassName='length'
          type='number'
        />
        <Select
          label='Region'
          isSearchable
          isClearable
          options={options}
          value={filters}
          onChange={setFilters}
          className='regions'
          isMulti
        />
      </div>
    </div>
  )
}

HotelsFilter.defaultProps = {
  options: [],
  id: 0,
  length: 10,
  setLength: ()=>{},
  filters: null,
  setFilters: ()=>{},
}

HotelsFilter.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    )
  ]),
  id: PropTypes.number,
  length: PropTypes.number,
  setLength: PropTypes.func,
  filters: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    )
  ]),
  setFilters: PropTypes.func
}

export default HotelsFilter
