import React, {useState} from 'react'
import Input from "./index"
import CONSTS from "../../../constants"

const InputStorybook = () => {

  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('')

  return (
    <>
      <Input
        value={val1}
        onChange={setVal1}
        placeholder='placeholder'
        clearable
        label='label'
        regExp={CONSTS.REGEXP.ruRegExp}
        maxLength={20}
        errorText='errorText'
        helperText='helperText'
      />
      <br/>
      <br/>
      <Input
        value={val2}
        onChange={setVal2}
        placeholder='placeholder'
        clearable
        label='label'
        regExp={CONSTS.REGEXP.ruRegExp}
        maxLength={50}
        errorText='errorText'
        helperText='helperText'
        multiline
      />
    </>
  )
}

export default InputStorybook
