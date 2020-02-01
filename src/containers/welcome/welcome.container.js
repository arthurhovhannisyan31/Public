// external libraries
import React from 'react'
// local services & data store
// local containers
// local components
import ActionButton from "../../components/ui/button/action-button"
import Icon from "../../components/ui/icons"
import ContainedButton from "../../components/ui/button/contained-button"
// local constants
// local styles
import './welcome.style.scss'


const Welcome = () => {

  return (
    <div className='welcome'>
      <span>span</span>
      <ContainedButton

      >
        <span>sample text</span>
      </ContainedButton>
      <div>
        <span>Action buttons</span>
        <div
          style={{
            display: 'flex',
            'flex-flow': 'row'
          }}
        >
          <ActionButton>
            <Icon
              label='add'
              fillMain='white'
            />
            <span>&nbsp;&nbsp;some text</span>
          </ActionButton>
          <ActionButton
            floating
          >
            <Icon
              label='add'
              fillMain='white'
            />
          </ActionButton>
          <ActionButton
            disabled
          >
            <Icon
              label='add'
              fillMain='white'
            />
            <span>&nbsp;&nbsp;some text</span>
          </ActionButton>
          <ActionButton
            disabled
            floating
          >
            <Icon
              label='add'
              fillMain='white'
            />
          </ActionButton>
          <ActionButton
            color='secondary'
          >
            <Icon
              label='add'
            />
            <span>some text</span>
          </ActionButton>
          <ActionButton
            floating
            color='secondary'
          >
            <Icon
              label='add'
            />
          </ActionButton>
          <ActionButton
            disabled
            color='secondary'
          >
            <Icon
              label='add'
            />
            <span>some text</span>
          </ActionButton>
          <ActionButton
            disabled
            floating
            color='secondary'
          >
            <Icon
              label='add'
            />
          </ActionButton>
        </div>
      </div>
    </div>
  )
}

export default Welcome
