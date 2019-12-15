// external libraries
// local services & data store
// local containers
// local components
// local constants
// local styles


// external libraries
import React, { useEffect } from 'react'
import { useHistory }  from 'react-router-dom'
// local components
import { NotFound as NotFoundComponent } from '../../components/error'
// local constants
import CONSTS from "../../constants"

const NorFound = () => {
  const history = useHistory()
  const timeout = CONSTS.REDIRECT_TIMEOUT * 1000

  useEffect(() => {
    setTimeout(() => {
      history.push(CONSTS.ROUTES.HOME[0])
    }, timeout)
  }, [history])

  return (
    <div>
      <NotFoundComponent
        timeout={CONSTS.REDIRECT_TIMEOUT}
      />
    </div>
  )
}

export default NorFound
