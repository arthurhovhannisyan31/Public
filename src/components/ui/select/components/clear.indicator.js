import React from 'react'
import Icon from "../../icons/icon.component"

const ClearIndicator = props => {
  const {
    children=<Icon label='clear'/>,
    getStyles,
    innerProps: {ref, ...restInnerProps}
  } = props

  return (
    <div
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...restInnerProps}
      className='select-default__clearIndicator'
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
