// external libraries
import React from 'react'
// local services & data store
// local containers
// local components
import InputStorybook from "../../components/ui/input/input.storybook"
import ButtonStorybook from "../../components/ui/button/button.storybook"
import SelectStorybook from "../../components/ui/select/select.storybook"
// local constants
// local styles
import './welcome.style.scss'

const Welcome = () => {

  return (
    <div
      className='welcome'
    >
      <ButtonStorybook/>
      <br/>
      <br/>
      <InputStorybook/>
      <br/>
      <br/>
      <SelectStorybook/>
    </div>
  )
}

export default Welcome
