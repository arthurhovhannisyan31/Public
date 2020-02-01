// external libraries
import React from 'react'
// local services & data store
// local containers
// local components
import {ContainedButton} from "../../components/ui/button"
// local constants
// local styles
import './welcome.style.scss'
import {MaterialIcon} from "../../components/ui/icons"

const Welcome = () => {

  return (
    <div className='Welcome'>
      <MaterialIcon label='placeholder' fill='red'/>
      <MaterialIcon label='directions' fill='orange'/>
      <MaterialIcon label='create' fill='gold'/>
      <MaterialIcon label='phone' fill='green'/>
      <MaterialIcon label='person' fill='blue'/>
      <MaterialIcon label='email' fill='purple'/>
      <MaterialIcon label='location' fill='red'/>
      <MaterialIcon label='visibility' fill='orange'/>
      <MaterialIcon label='visibility-off' fill='gold'/>
      <MaterialIcon label='date' fill='green'/>
      <MaterialIcon label='clear' fill='blue'/>
      <MaterialIcon label='cancel' fill='purple'/>
      <MaterialIcon label='star' fill='red'/>
      <MaterialIcon label='check' fill='orange'/>
      <MaterialIcon label='arrow-forward' fill='gold'/>
      <MaterialIcon label='arrow-drop-up' fill='green'/>
      <MaterialIcon label='arrow-drop-down' fill='blue'/>
      <MaterialIcon label='back' fill='purple'/>
      <MaterialIcon label='apps' fill='red'/>
      <MaterialIcon label='add' fill='orange'/>
      <MaterialIcon label='favorite' fill='gold'/>
      <MaterialIcon label='refresh' fill='green'/>
      <MaterialIcon label='more' fill='blue'/>
      <MaterialIcon label='more-24' fill='purple'/>
      <MaterialIcon label='menu' fill='red'/>
      <MaterialIcon label='close' fill='orange'/>
      <MaterialIcon label='chevron-right' fill='gold'/>
      <MaterialIcon label='chevron-left' fill='green'/>
      <MaterialIcon label='fullscreen-exit' fill='blue'/>
      <MaterialIcon label='fullscreen' fill='purple'/>
      <MaterialIcon label='expand-less' fill='red'/>
      <MaterialIcon label='expand-more' fill='orange'/>
      <MaterialIcon label='pause-outline' fill='gold'/>
      <MaterialIcon label='play' fill='green'/>
      <MaterialIcon label='share' fill='blue'/>
      <MaterialIcon label='bookmark' fill='purple'/>
      <MaterialIcon label='mic' fill='red'/>
      <MaterialIcon label='search' fill='orange'/>
      <MaterialIcon label='bla' fill='gold'/>
      <MaterialIcon label='bla' fill='green'/>
      <MaterialIcon label='bla' fill='blue'/>
      <MaterialIcon label='bla' fill='purple'/>

      <div>
        <ContainedButton
          disabled
          link='https:/ya.ru'
          onClick={() => {console.log(1)}}

        >
          to yandex
        </ContainedButton>
      </div>
      <div>
        <ContainedButton
          disabled
        >
          button button
        </ContainedButton>
      </div>
      <div>
        <ContainedButton
          onClick={() => {console.log(1)}}
        >
          button button button
        </ContainedButton>
      </div>
      <div>
        <ContainedButton
          onClick={() => {console.log(1)}}
          color='secondary'
        >
          button button button
        </ContainedButton>
        <ContainedButton
          onClick={() => {console.log(1)}}
          color='secondary'
          disabled
        >
          button button button
        </ContainedButton>
      </div>
      <div>
        <ContainedButton
          onClick={() => {console.log(1)}}
          color='false'
        >
          button button button
        </ContainedButton>
      </div>
    </div>
  )
}

export default Welcome
