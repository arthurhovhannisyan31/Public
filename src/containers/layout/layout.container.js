// external libraries
import React, {useContext, useEffect} from 'react'
import ClassNames from 'classnames'
// local services & data store
import {NavMenuContext, WindowSizeContext} from '../../contexts'
// local containers & components
import NavMenu from '../../components/layout/nav-menu'
import Header from '../../components/layout/header'
import Main from '../../components/layout/main'
import Footer from '../../components/layout/footer'
// local constants & styles
import CONSTS from "../../constants"
import './layout.style.scss'

const Layout = ({ children }) => {
  const {collapse, setCollapse} = useContext(NavMenuContext)
  const {width} = useContext(WindowSizeContext)
  const className = ClassNames({
    collapse
  })

  useEffect(() => {
    if (width <= CONSTS.COMPONENTS.BREAKPOINTS.widthTabletMd) setCollapse(true)
    if (width > CONSTS.COMPONENTS.BREAKPOINTS.widthTabletMd) setCollapse(false)
  }, [width])

  return (
    <div className={`layout ${className}`}>
      <div className="layout__content">
        <Header />
        <Main>
          <NavMenu />
          {children}
        </Main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
