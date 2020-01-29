// external libraries
import React from 'react'
// local services & data store
// local containers
// local components
import Button from "../../components/ui/button"
// local constants
// local styles
import './welcome.style.scss'

const Welcome = () => {

  return (
    <div className='Welcome'>
      <div>
        <Button>
          Test
        </Button>
      </div>
      {/*<span>Welcome container</span>*/}
      <div>
        <Button>
          Test Test
        </Button>
      </div>
      <div>
        <Button>
          Test Test Test
        </Button>
      </div>
    </div>
  )
}

export default Welcome
