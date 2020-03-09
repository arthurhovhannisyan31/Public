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

  const items = data
    // .sort((el1, el2) => el1?.id - el2?.id)
    .map(({id, name, price, region}) => {
    return (
      <ListItem
        key={`${id}-${name}`}
        id={id}
        name={name}
        price={price}
        region={region}
      />
    )
  })

  return (
    <div className="hotels-lazy-list">
      <div className="hotels-lazy-list__container">
        {items}
        <div
          className="loading-indicator"
          ref={_ref}
        >
          {loading &&
            <Inline3Dots
              color={CONSTS.COMPONENTS.STYLES.COLORS.PRIMARY}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default forwardRef(HotelsLazyList)
