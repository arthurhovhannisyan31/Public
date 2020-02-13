// external libraries
import React from 'react'
// local services & data store
// local containers & components
import InputStorybook from "../../components/ui/input/input.storybook"
import ButtonStorybook from "../../components/ui/button/button.storybook"
import SelectStorybook from "../../components/ui/select/select.storybook"
// local constants & styles
import './welcome.style.scss'

const Welcome = () => {

  return (
    <div
      className='welcome'
    >
      <ButtonStorybook/>
      <br/>
      <InputStorybook/>
      <br/>
      <SelectStorybook/>
    </div>
  )
}

export default Welcome
