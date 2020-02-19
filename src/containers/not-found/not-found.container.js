// external libraries
import React, { useEffect } from 'react'
// local services & data store
import {useRouter} from "../../services/utilities.service"
// local containers & components
import { NotFound as NotFoundComponent } from '../../components/error'
// local constants & styles
import CONSTS from "../../constants"

const NorFound = () => {
  const router =  useRouter()
  const timeout = CONSTS.REDIRECT_TIMEOUT * 1000

  useEffect(() => {
    setTimeout(() => {
      router.push(CONSTS.ROUTES.WELCOME.ROUTE[0])
    }, timeout)
  }, [timeout, router])

  return (
    <div className='not-found horizontal-block'>
      <NotFoundComponent
        timeout={CONSTS.REDIRECT_TIMEOUT}
      />
    </div>
  )
}

export default NorFound
