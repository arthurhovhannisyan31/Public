import React from 'react'
import {components} from "react-select"
import Icon from "../../icons/icon.component"

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
