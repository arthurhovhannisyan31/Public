// external libraries
import React, {useState} from 'react'
// local services & data store
// local containers & components
import SelectDefault from "./index"
// local constants & styles
import CONSTS from "../../../constants"

const SelectStorybook = () => {

  const [val1, setVal1] = useState(null)
  const [val2, setVal2] = useState(null)
  const [val3, setVal3] = useState(null)
  const [val4, setVal4] = useState(null)

  return (
    <div
    >
      <h4>Select storybootk</h4>
      <div><hr/><br/></div>
      <p>Select default options default-option searchable clearable value onchange label</p>
      <SelectDefault
        options={CONSTS.COMPONENTS.OPTIONS.DEFAULT_SELECT}
        defaultValue={CONSTS.COMPONENTS.OPTIONS.DEFAULT_SELECT[0]}
        isSearchable
        isClearable
        value={val1}
        onChange={setVal1}
        label='Searchable select'
      />
      <br/>
      <p>Select default options default-option searchable value onchange label</p>
      <SelectDefault
        options={CONSTS.COMPONENTS.OPTIONS.DEFAULT_SELECT}
        defaultValue={CONSTS.COMPONENTS.OPTIONS.DEFAULT_SELECT[0]}
        isSearchable
        value={val2}
        onChange={setVal2}
        label='Searchable select'
      />
      <br/>
      <p>Select default options default-option searchable value onchange label</p>
      <SelectDefault
        options={CONSTS.COMPONENTS.OPTIONS.DEFAULT_SELECT}
        defaultValue={CONSTS.COMPONENTS.OPTIONS.DEFAULT_SELECT[0]}
        isClearable
        value={val3}
        onChange={setVal3}
        label='Searchable select'
      />
      <br/>
      <p>Select default options value onchange</p>
      <SelectDefault
        options={CONSTS.COMPONENTS.OPTIONS.DEFAULT_SELECT}
        value={val4}
        onChange={setVal4}
      />
      <div><hr/><br/></div>
    </div>
  )
}

export default SelectStorybook
