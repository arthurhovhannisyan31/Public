// external libraries
import React from 'react'
// local services & data store
import {useRouter} from "../../../services/utilities.service"
// local containers & components
import Icon from "../../ui/icons/icon.component"
import {PersonalInfo} from "../../ui/navigation"
import Title from "../../text-containers/title"
import Divider from "../../ui/lines/devider"
// local constants & styles
import CONSTS from "../../../constants"
import './header.style.scss'

const Header = () => {
  const router = useRouter()
  const {location: {pathname}} = router
  /**
   * Define current route label value
   * @type {string}
   */
  const title = Object
    .values(CONSTS.ROUTES)
    .filter(({ROUTE}) => Array
      .isArray(ROUTE)
        ? ROUTE[0] === pathname
        : ROUTE === pathname
    )[0]?.LABEL

  return (
    <header className='header'>
      <div className='header__content horizontal-block vertical-block'>
        <Title extraClassname="header__content_title">
          {title}
        </Title>
        <div className="header__content_controls">
          <button
            type="button"
            className="header__content_search"
          >
            <Icon
              label="search"
            />
          </button>
          <button
            type="button"
            className="header__content_notifications"
          >
            <Icon
              label="notification-new"
              colorSecondary={CONSTS.COMPONENTS.STYLES.COLORS.PRIMARY}
            />
          </button>
          <Divider vertical/>
          <PersonalInfo
            title='Sierra Ferguson'
            isAvatar
            additionalInfo='s.ferguson@gmail.com'
          />
        </div>
      </div>
    </header>
  )
}

export default Header

