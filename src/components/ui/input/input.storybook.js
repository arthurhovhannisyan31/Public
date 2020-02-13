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
  const [val3, setVal3] = useState('')
  const [val4, setVal4] = useState('')
  const [val5, setVal5] = useState('')
  const [val6, setVal6] = useState('')
  const [reset, setReset] = useState(false)

  useEffect(() => {
    if (reset) {
      setReset(false)
    }
  }, [reset, setReset])

  return (
    <>
      <h4>Input storybook</h4>
      <div><hr/></div>
      <button
        type='button'
        onClick={() => {setReset(true)}}
      >reset</button>
      <p>input default extraClassName = test reset clearable label
        regExp maxLength 20 errorText HelperText showCounter
      </p>
      <Input
        extraClassName='test'
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
      <p>input default extraClassName = test reset clearable label
        regExp maxLength 20 errorText HelperText showCounter multiline
      </p>
      <Input
        extraClassName='test'
        value={val2}
        reset={reset}
        onChange={setVal2}
        isClearable
        label='label'
        regExp={CONSTS.REGEXP.enRegExp}
        maxLength={20}
        errorText='errorText'
        helperText='helperText'
        showCounter
        isMultiline
      />
      <br/>
      <p>input default placeholder label show counter disabled</p>
      <Input
        // value={val2}
        // onChange={setVal2}
        placeholder='placeholder aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        label='label'
        showCounter
        isDisabled
      />
      <br/>
      <p>input default placeholder label show counter disabled isMultiline</p>
      <Input
        // value={val2}
        // onChange={setVal2}
        placeholder='placeholder aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        label='label'
        showCounter
        isDisabled
        isMultiline
      />
      <br/>
      <p>input default value disabled </p>
      <Input
        // value={val3}
        // onChange={setVal3}
        value='value aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        isDisabled
      />
      <br/>
      <p>input default value disabled isMultiline</p>
      <Input
        // value={val3}
        // onChange={setVal3}
        value='value aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        isDisabled
        isMultiline
      />
      <br/>
      <p>input default value reset onChange clearable regExp regExpStrict</p>
      <Input
        extraClassName='test'
        value={val3}
        reset={reset}
        onChange={setVal3}
        isClearable
        regExp={CONSTS.REGEXP.enRegExp}
        regExpStrict
      />
      <br/>
      <p>input default value reset onChange clearable regExp regExpStrict isMultiline</p>
      <Input
        extraClassName='test'
        value={val4}
        reset={reset}
        onChange={setVal4}
        isClearable
        regExp={CONSTS.REGEXP.enRegExp}
        regExpStrict
        isMultiline
      />
      <br/>
      <p>input default value onChange maxLength maxLengthStrict counter</p>
      <Input
        value={val5}
        onChange={setVal5}
        maxLength={20}
        maxLengthStrict
        showCounter
      />
      <br/>
      <p>input default value onChange maxLength maxLengthStrict counter isMultiline</p>
      <Input
        value={val6}
        onChange={setVal6}
        maxLength={20}
        maxLengthStrict
        showCounter
        isMultiline
      />
      <br/>
      <div><hr/></div>
    </>
  )
}

export default InputStorybook

