// external libraries
import React from 'react';
import PropTypes from 'prop-types';
// local services & data store
// local containers & components
import Icon from '../../icons/icon.component';
import { SubTitle } from '../../text-containers';
// local constants & styles
import CONSTS from '../../../../constants';
import './toggle-sidebar.style.scss';

const ToggleSidebar = ({ collapse, setCollapse }) => {
  return (
    <button
      type="button"
      className="toggle-sidebar"
      onClick={() => {
        setCollapse(val => !val);
      }}
    >
      <div id="toggle-sidebar">
        {collapse ? (
          <Icon
            label="nav-menu-toggle-on"
            colorMain={CONSTS.COMPONENTS.STYLES.COLORS.PRIMARY}
            opacityMain={1}
          />
        ) : (
          <Icon label="nav-menu-toggle-off" />
        )}
      </div>
      <label htmlFor="toggle-sidebar">
        {!collapse && <SubTitle>Toggle sidebar</SubTitle>}
      </label>
    </button>
  );
};

ToggleSidebar.defaultProps = {
  collapse: false,
  setCollapse: () => {}
};

ToggleSidebar.propTypes = {
  collapse: PropTypes.bool,
  setCollapse: PropTypes.func
};

export default ToggleSidebar;
