import React from 'react';
// eslint-disable-next-line import/no-unresolved
import FastGrowMock from '../../../ui/google-map/fast-grow-mock';

const FastGrowOverlay = ({ ...props }) => {
  const { setCategory } = props;

  return (
    <>
      <FastGrowMock setCategory={setCategory} />
    </>
  );
};

export default FastGrowOverlay;
