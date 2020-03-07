// external libraries
import React from 'react'
// local services & data store
// local containers & components
// local constants & styles
import './list-item.style.scss'

const ListItem = (
  { id,
    name,
    region,
    price
  }) => {

  return (
    <div className='hotels-lazy-list-item'>
      <span>Hotel lazy list</span>
      <div className='hotels-lazy-list-item__container'>
        <span className='hotels-lazy-list-item__title'>{id}</span>
        <span className='hotels-lazy-list-item__title'>{name}</span>
        <span className='hotels-lazy-list-item__title'>{region}</span>
        <span className='hotels-lazy-list-item__title'>{price}</span>
      </div>
    </div>
  )
}

export default ListItem
