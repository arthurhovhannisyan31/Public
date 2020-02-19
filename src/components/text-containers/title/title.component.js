import React from 'react'
import './title.style.scss'

const Title = ({children, extraClassname}) => {
  return (
    <span className={`title ${extraClassname}`}>
      {children}
    </span>
  )
}

export default Title
