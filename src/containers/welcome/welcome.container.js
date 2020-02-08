// external libraries
import React, {useState} from 'react'
// local services & data store
// local containers
// local components
import Input from "../../components/ui/input"
import Button from '../../components/ui/button'
// local constants
// local styles
import './welcome.style.scss'
import CONSTS from "../../constants"


const Welcome = () => {
  const [val, setVal] = useState('')

  return (
    <div className='welcome'>
      <span>Welcome</span>
      <br/>
      <Input
        value={val}
        onChange={setVal}
        regExp={CONSTS.REGEXP.ruRegExp}
        tooltipValue='tooltipValue test'
        labelValue='labelValue input'
      />
    </div>
  )
}

export default Welcome
