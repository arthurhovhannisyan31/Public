// external libraries
import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers & components
import ListItem from "./list-item"
import Inline3Dots from "../../loading-indicators/inline-3-dots"
// local constants & styles
import CONSTS from "../../../../constants"
import './hotels-lazy-list.style.scss'

const HotelsLazyList = forwardRef( (
  { data,
    loading
  }, _ref
) => {
  const items = data
    .sort((el1, el2) => el1?.id - el2?.id)
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
})

HotelsLazyList.defaultProps = {
  data: [],
  loading: false
}

HotelsLazyList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      region: PropTypes.string,
      price: PropTypes.number
    })
  ),
  loading: PropTypes.bool
}

export default HotelsLazyList
