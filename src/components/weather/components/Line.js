import React from 'react'

const Line = ({ data, width, height }) => {
  const lines = data.map((el) => (
    <path fill={el.fill} d={el.path} stroke={1} strokeWidth={1}/>
  ))

  return (
    <svg width={width} height={height}>
      {lines[0]}
    </svg>
  )
}

export default Line
