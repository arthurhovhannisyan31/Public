// external libraries
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
// local services & data store
// local containers & components
// local constants & styles
import './dashboard.container.scss'
import InputStorybook from '../../components/ui/input/input.storybook'
import { HelmetContext } from '../../contexts'

const Dashboard = () => {
  /**
   * Use context props
   * */
  const { title } = useContext(HelmetContext)

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="dashboard">
        <span>Dashboard container</span>
        <InputStorybook />
      </div>
    </>
  )
}

export default Dashboard
