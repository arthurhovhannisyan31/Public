// external libraries
import React from 'react'
// local services & data store
// local containers & components
import Icon from "../../icons/icon.component"
// local constants & styles

const ClearIndicator = props => {
  const {
    children=<Icon label='clear-light'/>,
    getStyles,
    innerProps: {ref, ...restInnerProps}
  } = props

  return (
    <div
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...restInnerProps}
      className='select__clearIndicator'
      ref={ref}
      style={getStyles('clearIndicator', props)}
    >
      <div>
        {children}
      </div>
    </div>
  )
}

export default ClearIndicator
