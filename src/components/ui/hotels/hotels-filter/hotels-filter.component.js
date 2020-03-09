// external libraries
import React from 'react'
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
    filterValue,
    setFilterValue
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
          onChange={setLength}
          helperText='Numbers only'
          extraClassName='length'
          type='number'
          isDisabled
        />
        <Select
          label='Region'
          isSearchable
          isClearable
          options={options}
          value={filterValue}
          onChange={setFilterValue}
          className='regions'
          isMulti
        />
      </div>
    </div>
  )
}

export default HotelsFilter
