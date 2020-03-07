// external libraries
import React from 'react'
import ListItem from "./list-item"
// local services & data store
// local containers & components
// local constants & styles

const HotelsLazyList = (
  { data,
    loading

  }) => {

  const items = data.map(({id, name, price, region}) => (
    <ListItem
      key={`${id}-${name}`}
      id={id}
      name={name}
      price={price}
      region={region}
    />
  ))

  return (
    <div className="hotels-lazy-list">
      <span>HotelsLazyList</span>
      {items}
    </div>
  )
}

export default HotelsLazyList
