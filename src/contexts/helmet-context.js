// external libraries
import React, { createContext } from 'react'
import { useRouter } from '../services/utilities.service'
import CONSTS from '../constants'
// local services & data store
// local containers & components
// local constants & styles

const HelmetContext = createContext(null)

const HelmetContextContainer = ({ children }) => {
  const router = useRouter()
  const {
    location: { pathname },
  } = router
  /**
   * Define current route label value
   * @type {string}
   */
  const title = Object.values(CONSTS.ROUTES).filter(({ ROUTE }) =>
    Array.isArray(ROUTE) ? ROUTE[0] === pathname : ROUTE === pathname
  )[0]?.LABEL
  return (
    <HelmetContext.Provider value={{ title }}>
      {children}
    </HelmetContext.Provider>
  )
}
export { HelmetContextContainer as default, HelmetContext }
