// external libraries
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import SelectStorybook from '../../components/ui/select/select.storybook'
// local services & data store
import { HelmetContext } from '../../contexts'
// local containers & components
// local constants & styles

const News = () => {
  /**
   * Use context props
   * */
  const { title } = useContext(HelmetContext)
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="news">
        <span>News container</span>
        <SelectStorybook />
      </div>
    </>
  )
}

export default News
