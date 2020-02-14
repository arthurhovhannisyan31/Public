import React from 'react'
import './title.style.scss'

const Title = ({value}) => {
  return (
    <div className='title-default'>
      <span>{value}</span>
    </div>
  )
}

export default Title
