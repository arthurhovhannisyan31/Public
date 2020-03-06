// external libraries
import React from 'react'
// local services & data store
// local containers & components
// local constants & styles
import './dashboard.container.scss'
import InputStorybook from "../../components/ui/input/input.storybook"

const Dashboard = () => {

  return (
    <div className='dashboard'>
      <span>Dashboard container</span>
      <InputStorybook/>
    </div>
  )
}

export default Dashboard
