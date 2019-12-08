import React, { useEffect } from 'react'
import { useHistory }  from 'react-router-dom'

import { NotFound as NotFoundComponent } from '../../components/error'

import { redirectTimeout } from '../../constants/utilities.constants'

const NorFound = () => {

  const history = useHistory()

  const timeout = redirectTimeout * 1000

  useEffect(() => {
    setTimeout(() => {
      history.push('/')
    }, timeout)
  }, [history])

  return (
    <div>
      <NotFoundComponent
        timeout={redirectTimeout}
      />
    </div>
  )
}

export default NorFound
