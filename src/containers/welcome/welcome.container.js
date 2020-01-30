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
        <Button
          disabled
          link='https:/ya.ru'
          onClick={() => {console.log(1)}}

        >
          button
        </Button>
      </div>
      <div>
        <Button
          disabled
        >
          button button
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {console.log(1)}}
        >
          button button button
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {console.log(1)}}
          color='secondary'
        >
          button button button
        </Button>
        <Button
          onClick={() => {console.log(1)}}
          color='secondary'
          disabled
        >
          button button button
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {console.log(1)}}
          color='false'
        >
          button button button
        </Button>
      </div>
    </div>
  )
}

export default Welcome
