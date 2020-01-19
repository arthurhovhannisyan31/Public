// external libraries
import React, { useEffect } from 'react'
import { useHistory }  from 'react-router-dom'
// local services & data store
import {useRouter} from "../../services/utilities.service"
// local containers
// local components
import { NotFound as NotFoundComponent } from '../../components/error'
// local constants
import CONSTS from "../../constants"
// local styles


const NorFound = () => {
  const router =  useRouter()
  const history = useHistory()
  const timeout = CONSTS.REDIRECT_TIMEOUT * 1000

  useEffect(() => {
    setTimeout(() => {
      router.push(CONSTS.ROUTES.WELCOME[0])
    }, timeout)
  }, [history, timeout])

  return (
    <div className='NorFound'>
      <NotFoundComponent
        timeout={CONSTS.REDIRECT_TIMEOUT}
      />
    </div>
  )
}

export default NorFound
