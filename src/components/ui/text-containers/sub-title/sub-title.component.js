// external libraries
import React from 'react';
import PropTypes from 'prop-types';
// local services & data store
// local containers & components
// local constants & styles
import './sub-title.style.scss';

const SubTitle = ({ children, isBold, extraClassname }) => {
  return (
    <span
      className={`sub-title ${extraClassname}`}
      style={{
        fontWeight: isBold ? 'bold' : 'normal'
      }}
    >
      {children}
    </span>
  );
};

SubTitle.defaultProps = {
  children: null,
  isBold: false
};

SubTitle.propTypes = {
  children: PropTypes.node,
  isBold: PropTypes.bool
};

export default SubTitle;
