// external libraries
import React, {useState} from 'react'
// local services & data store
// local containers & components
import SelectDefault from "./index"
// local constants & styles
import CONSTS from "../../../constants"

const SelectStorybook = () => {
  const [val, setVal] = useState(null)
  return (
    <>
      <SelectDefault
        options={CONSTS.COMPONENTS.OPTIONS.DEFAULT_SELECT}
        defaultValue={CONSTS.COMPONENTS.OPTIONS.DEFAULT_SELECT[0]}
        isSearchable
        isClearable
        value={val}
        onChange={setVal}
        label='Searchable select'
      />
      <br/>
      <SelectDefault
        options={CONSTS.COMPONENTS.OPTIONS.DEFAULT_SELECT}
        defaultValue={CONSTS.COMPONENTS.OPTIONS.DEFAULT_SELECT[0]}
        value={val}
        onChange={setVal}
      />
    </>
  )
}

export default SelectStorybook
