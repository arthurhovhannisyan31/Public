import React from 'react'
import FastGrowMock from "../../../ui/google-map/fast-grow-mock"

const FastGrowOverlay = ({...props}) => {

  const { setCategory } = props;

  return (
    <>
      <FastGrowMock
        setCategory={setCategory}
      />
    </>
  );
};

export default FastGrowOverlay
