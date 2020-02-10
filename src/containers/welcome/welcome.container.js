// external libraries
import React, {useState} from 'react'
// local services & data store
// local containers
// local components
import {IconStorybook} from "../../components/ui/icons"
// local constants
// local styles
import './welcome.style.scss'
import CONSTS from "../../constants"
import Input from "../../components/ui/input"
import InputStorybook from "../../components/ui/input/input.storybook"

const Welcome = () => {

  const [val1, setVal1] = useState('')

  return (
    <div className='welcome'>
      <InputStorybook/>
    </div>
  )
}

export default Welcome
