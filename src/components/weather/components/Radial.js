import React from 'react'

const Radial = ({ width, height, data }) => {
  const { slices, tempAnnotations } = data

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {slices.map(({ fill, path }, i) => (
          <path
            // eslint-disable-next-line
            key={i}
            d={path}
            fill={fill}
          />
        ))}
        {tempAnnotations.map(({ r, temp }, i) => {
          // eslint-disable-next-line
          if (!isNaN(r) && r >= 0) {
            return (
              // eslint-disable-next-line
              <g key={i}>
                <circle r={r} fill="none" stroke="#999" />
                <text y={-r - 2} textAnchor="middle">
                  {temp} F
                </text>
              </g>
            )
          }
          return null
        })}
      </g>
    </svg>
  )
}

export default Radial
