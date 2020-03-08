// external libraries
import React, {forwardRef} from 'react'
import ListItem from "./list-item"
import Inline3Dots from "../../loading-indicators/inline-3-dots"
import CONSTS from "../../../../constants"
// local services & data store
// local containers & components
// local constants & styles
import './hotels-lazy-list.style.scss'

const HotelsLazyList = (
  { data,
    loading
  }, _ref) => {

  const items = data.map(({id, name, price, region}, index, {length}) => {
    return (
      <ListItem
        key={`${id}-${name}`}
        id={id}
        name={name}
        price={price}
        region={region}
        lastItem={index+1 === length}
      />
    )
  })

  return (
    <div className="hotels-lazy-list">
      <span>HotelsLazyList</span>
      {items}
      <div
        className="hotels-lazy-list__loading-indicator"
        ref={_ref}
      >
        {loading &&
          <Inline3Dots
            color={CONSTS.COMPONENTS.STYLES.COLORS.PRIMARY}
          />
        }
      </div>
    </div>
  )
}

export default forwardRef(HotelsLazyList)
