// external libraries
import React, { useEffect, useContext } from 'react'
import { Helmet } from 'react-helmet'
// local services & data store
import { useRouter } from '../../services/utilities.service'
import { HelmetContext } from '../../contexts'
// local containers & components
import { NotFound as NotFoundComponent } from '../../components/error'
// local constants & styles
import CONSTS from '../../constants'

const NorFound = () => {
  /**
   * Use context props
   * */
  const { title } = useContext(HelmetContext)
  const router = useRouter()
  const timeout = CONSTS.REDIRECT_TIMEOUT * 1000

  useEffect(() => {
    setTimeout(() => {
      router.push(CONSTS.ROUTES.WELCOME.ROUTE[0])
    }, timeout)
  }, [timeout, router])

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="not-found">
        <NotFoundComponent timeout={CONSTS.REDIRECT_TIMEOUT}/>
      </div>
    </>
  )
}

export default NorFound
