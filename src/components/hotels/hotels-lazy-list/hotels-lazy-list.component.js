// external libraries
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
// local services & data store
// local containers & components
import ListItem from './list-item'
import Inline3Dots from '../../ui/loading-indicators/inline-3-dots'
// local constants & styles
import CONSTS from '../../../constants'
import './hotels-lazy-list.style.scss'

const HotelsLazyList = forwardRef(({ data, loading, firstLoad }, _ref) => {
  const className = ClassNames({
    firstLoad,
  })

  const items = data
    .sort((el1, el2) => el1?.id - el2?.id)
    .map(({ id, name, price, region }) => {
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
      <div className={`hotels-lazy-list__container ${className}`}>
        {items}
        <div className="loading-indicator">
          {loading && (
            <Inline3Dots color={CONSTS.COMPONENTS.STYLES.COLORS.PRIMARY} />
          )}
        </div>
        <div className="ref" ref={_ref} />
      </div>
    </div>
  )
})

HotelsLazyList.defaultProps = {
  data: [],
  loading: false,
  firstLoad: false,
}

HotelsLazyList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      region: PropTypes.string,
      price: PropTypes.number,
    })
  ),
  loading: PropTypes.bool,
  firstLoad: PropTypes.bool,
}

export default HotelsLazyList
