// external libraries
import React, {useState, useEffect} from 'react'
// local services & data store
// local containers & components
import Input from "./index"
// local constants & styles
import CONSTS from "../../../constants"

const InputStorybook = () => {

  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('')
  const [reset, setReset] = useState(false)

  useEffect(() => {
    if (reset) {
      setReset(false)
    }
  }, [reset, setReset])

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
        isClearable
        label='label'
        regExp={CONSTS.REGEXP.enRegExp}
        maxLength={20}
        errorText='errorText'
        helperText='helperText'
        showCounter
      />
      <br/>
      <br/>
      <Input
        extraClassName='bla'
        value={val2}
        reset={reset}
        onChange={setVal2}
        isClearable
        regExp={CONSTS.REGEXP.enRegExp}
        regExpStrict
        // onChangeDebounced={e => {
        //   console.log(e)
        // }}
      />
    </>
  )
}

export default InputStorybook

