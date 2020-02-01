// external libraries
import React from 'react'
// local services & data store
// local containers
// local components
import ActionButton from "../../components/ui/button/action-button"
import Icon from "../../components/ui/icons"
// local constants
// local styles
import './welcome.style.scss'

const Welcome = () => {

  return (
    <div className='welcome'>
      <span>span</span>
      <ActionButton>
        <Icon
          label='add'
          fillMain='white'
          fillOpacity={1}
        />
        <span>some text</span>
      </ActionButton>
      <ActionButton
        floating
      >
        <Icon
          label='add'
          fillMain='white'
          fillOpacity={1}
        />
      </ActionButton>
      <ActionButton
        disabled
      >
        <Icon
          label='add'
          fillMain='white'
          fillOpacity={1}
        />
        <span>some text</span>
      </ActionButton>
      <ActionButton
        disabled
        floating
      >
        <Icon
          label='add'
          fillMain='white'
          fillOpacity={1}
        />
      </ActionButton>
    </div>
  )
}

export default Welcome
