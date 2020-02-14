import React from 'react'
import HeaderArea from "./header-area.component"

const HeaderAreaMock = () => {

  return (
    <>
      <HeaderArea
        title='Title'
        isAvatar
        additionalInfo='Additional info (email)'
      />
    </>
  )
}

export default HeaderAreaMock
