// external libraries
import React from 'react'
// local services & data store
// local containers & components
import IconStorybook from "../../components/ui/icons/icon.storybook"
// local constants & styles
import './dashboard.container.scss'

const Dashboard = () => {

  return (
    <div className='dashboard horizontal-block'>
      <span>Dashboard container</span>
      <IconStorybook/>
    </div>
  )
}

export default Dashboard
