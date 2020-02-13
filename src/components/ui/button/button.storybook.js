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
      <div>
        <ContainedButton>
          Contained Button
        </ContainedButton>
      </div>
      <br/>
      <div>
        <ActionButton>
          Action Button
        </ActionButton>
      </div>
    </>
  )
}

export default ButtonStorybook
