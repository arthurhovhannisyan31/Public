// external libraries
import React from 'react';
// local services & data store
// local containers & components
// local constants & styles
import './title.style.scss';

const Title = ({ children, extraClassname }) => {
  return <span className={`title ${extraClassname}`}>{children}</span>;
};

export default Title;
