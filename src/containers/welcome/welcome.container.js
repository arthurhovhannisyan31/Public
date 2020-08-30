// external libraries
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
// local services & data store
import { HelmetContext } from '../../contexts'
// local containers & components
// local constants & styles
import './welcome.style.scss'

const Welcome = () => {
  /**
   * Use context props
   * */
  const { title } = useContext(HelmetContext)
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="welcome">
        <span>Welcome container</span>
      </div>
    </>
  )
}

export default Welcome
