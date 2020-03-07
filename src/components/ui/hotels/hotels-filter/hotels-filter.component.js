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
    setLength
  }) => {

  return (
    <div className='hotels-filter'>
      <span>HotelsFilter</span>
      <div className='hotels-filter-container'>
        <Input
          label='First element id'
          value={id}
          onChange={setId}
          helperText='Numbers only'
        />
        <Input
          label='Quantity for lazy load'
          value={length}
          onChange={setLength}
          helperText='Numbers only'
        />
        <Select
          label='Region'
          isSearchable
          isClearable
        />
      </div>
    </div>
  )
}

export default HotelsFilter