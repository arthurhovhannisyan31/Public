import React from 'react'
import Skeleton from "react-loading-skeleton"

import './routeInfo-popup.skeleton.style.scss'

const RouteInfoPopupSkeleton = () => {

  return (
    <div className="routeInfoPopupSkeleton">
      <Skeleton width={180} height={70}/>
      <Skeleton width={45} height={22}/>
    </div>
  )
}

export default RouteInfoPopupSkeleton
