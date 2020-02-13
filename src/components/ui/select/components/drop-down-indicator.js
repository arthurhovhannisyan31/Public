// external libraries
import React from 'react'
import {components} from "react-select"
// local services & data store
// local containers & components
import Icon from "../../icons/icon.component"
// local constants & styles

const DropdownIndicator = props => {

  return (
    <components.DropdownIndicator
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
    >
      <Icon label='arrow-drop-down'/>
    </components.DropdownIndicator>
  )
}

export default DropdownIndicator
