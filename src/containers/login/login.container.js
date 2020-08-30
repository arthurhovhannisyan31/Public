// external libraries
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
// local services & data store
import { HelmetContext } from '../../contexts'
// local containers & components
// local constants & styles

const Login = () => {
  /**
   * Use context props
   * */
  const { title } = useContext(HelmetContext)
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="login">
        <span>Login container</span>
      </div>
    </>
  )
}

export default Login
