// external libraries
// local services & data store
// local containers
// local components
// local constants
// local styles


// external libraries
import React from 'react'
// local components
import { AccessDenied as AccessDeniedComponent } from '../../components/error'

const AccessDenied = () => {

  return (
    <div className='AccessDenied'>
      <AccessDeniedComponent/>
    </div>
  )
}

export default AccessDenied
