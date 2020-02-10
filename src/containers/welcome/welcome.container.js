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

const Welcome = () => {

  const [val1, setVal1] = useState('')

  return (
    <div className='welcome'>
      <Input
        value={val1}
        onChange={setVal1}
        placeholder='placeholder'
        clearable
        label='label'
        regExp={CONSTS.REGEXP.ruRegExp}
        maxLength={50}
        errorText='errorText'
        helperText='helperText'
        multiline
      />
    </div>
  )
}

export default Welcome
