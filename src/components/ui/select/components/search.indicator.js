import React from 'react'
import {components} from "react-select"
import Icon from "../../icons/icon.component"

const SearchIndicator = props => {

  return (
    <components.DropdownIndicator
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
    >
      <Icon label='search'/>
    </components.DropdownIndicator>
  )
}

export default SearchIndicator
