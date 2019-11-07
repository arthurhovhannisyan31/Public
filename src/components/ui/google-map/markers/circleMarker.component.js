import React from "react"

const CircleMarker = () => {

  return (
    <div className="gm-marker gm-marker-simple">
      <svg width="32" height="50" viewBox="0 0 32 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M32 16C32 24.8366 23.3846 36.9231 16 49.2308C7.38462 37.3333 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z"
          fill="#FF5248"/>
        <circle cx="16" cy="16.1796" r="7.79487" fill="white"/>
      </svg>
    </div>
  )
}

export default CircleMarker

