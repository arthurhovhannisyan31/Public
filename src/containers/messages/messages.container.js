// external libraries
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import ButtonStorybook from '../../components/ui/button/button.storybook'
// local services & data store
import { HelmetContext } from '../../contexts'
// local containers & components
// local constants & styles

const Messages = () => {
  /**
   * Use context props
   * */
  const { title } = useContext(HelmetContext)
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="messages">
        <span>Messages container</span>
        <ButtonStorybook />
      </div>
    </>
  )
}

export default Messages
