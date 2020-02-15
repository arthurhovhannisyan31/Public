// external libraries
import React from 'react'
// local services & data store
// local containers & components
import ContainedButton from "./contained-button"
import ActionButton from "./action-button"
// local constants & styles

const ButtonStorybook = () => {

  return (
    <>
      <h3>Button storybook</h3>
      <div><hr/></div>
      <br/>
      <div>
        <p>button default</p>
        <ContainedButton>
          Contained Button
        </ContainedButton>
      </div>
      <br/>
      <div>
        <p>button default disabled color main</p>
        <ContainedButton
          disabled
        >
          Contained Button
        </ContainedButton>
      </div>
      <br/>
      <div>
        <p>button default disabled color secondary</p>
        <ContainedButton
          color='secondary'
          disabled
        >
          Contained Button
        </ContainedButton>
      </div>
      <br/>
      <div>
        <p>button action</p>
        <ActionButton>
          Action Button
        </ActionButton>
      </div>
      <br/>
      <div>
        <p>button action disabled color main</p>
        <ActionButton
          disabled
        >
          Action Button
        </ActionButton>
      </div>
      <br/>
      <div>
        <p>button action disabled color secondary</p>
        <ActionButton
          color='secondary'
          disabled
        >
          Action Button
        </ActionButton>
      </div>
      <br/>
      <div><hr/></div>
    </>
  )
}

export default ButtonStorybook
