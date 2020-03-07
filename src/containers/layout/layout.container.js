// external libraries
import React, { useContext } from 'react';
import ClassNames from 'classnames';
// local services & data store
import { NavMenuContext } from '../../contexts';
// local containers & components
// import Footer from '../../components/layout/footer'
// import Header from '../../components/layout/header'
import NavMenu from '../../components/layout/nav-menu';
import Header from '../../components/layout/header';
import Main from '../../components/layout/main';
import Footer from '../../components/layout/footer';
// local constants & styles
import './layout.style.scss';

const Layout = ({ children }) => {
  const { collapse } = useContext(NavMenuContext);
  const className = ClassNames({
    collapse
  });
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
  );
};

export default Layout;
