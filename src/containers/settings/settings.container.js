// external libraries
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import IconStorybook from '../../components/ui/icons/icon.storybook'
// local services & data store
import { HelmetContext } from '../../contexts'
// local containers & components
// local constants & styles

const Settings = () => {
  /**
   * Use context props
   * */
  const { title } = useContext(HelmetContext)
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="settings">
        <span>Settings container</span>
        <IconStorybook />
      </div>
    </>
  )
}

export default Settings
