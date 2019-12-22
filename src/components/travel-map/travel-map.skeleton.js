import React from 'react';
import Skeleton from "react-loading-skeleton";

import './travel-map.skeleton.style.scss'

const TravelMapSkeleton = ({ height, width}) => {

  return (
    <div id='example-map' className="example-map-skeleton" style={{height, width}}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default TravelMapSkeleton;
