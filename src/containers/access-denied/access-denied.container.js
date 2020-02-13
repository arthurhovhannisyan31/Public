// external libraries
import React from 'react'
// local services & data store
// local containers & components
import { AccessDenied as AccessDeniedComponent } from '../../components/error'
// local constants & styles

const AccessDenied = () => {

  return (
    <div className='AccessDenied'>
      <AccessDeniedComponent/>
    </div>
  )
}

export default AccessDenied
