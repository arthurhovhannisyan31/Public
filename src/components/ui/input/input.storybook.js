import React, {useState} from 'react'
import Input from "./index"
import CONSTS from "../../../constants"

const InputStorybook = () => {

  const [val1, setVal1] = useState('')
  const [reset, setReset] = useState(false)

  return (
    <>
      <button
        type='button'
        onClick={() => {setReset(true)}}
      >reset</button>
      <Input
        extraClassName='bla'
        value={val1}
        reset={reset}
        onChange={setVal1}
        clearable
        label='label'
        regExp={CONSTS.REGEXP.enRegExp}
        maxLength={20}
        maxLengthStrict
        errorText='errorText'
        helperText='helperText'
      />
    </>
  )
}

export default InputStorybook

