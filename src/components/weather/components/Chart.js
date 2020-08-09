import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

const Chart = ({ data, width, height, margin, updateBrushRange }) => {
  // eslint-disable-next-line
  const { yAxis, xAxis, xScale, yScale } = data
  const { top, right, bottom, left } = margin

  const brush = d3
    .brushX()
    .extent([
      [left, top],
      [width - right, height - top],
    ])
    .on('start end', () => {
      // eslint-disable-next-line
      const selection = d3.event.selection
      if (selection) {
        const [minX, maxX] = d3.event.selection
        const selectAll = minX === maxX

        const min = selectAll ? left : minX
        const max = selectAll ? width - right : maxX

        const range = [xScale.invert(min), xScale.invert(max)]
        updateBrushRange({ range })
      }
    })

  useEffect(() => {
    // eslint-disable-next-line
    d3.select(refY.current).call(yAxis)
    // eslint-disable-next-line
    d3.select(refX.current).call(xAxis)
    // eslint-disable-next-line
    d3.select(refBrush.current)
      // eslint-disable-next-line
      .call(brush)
  }, [data])

  const rects = data.data.map(({ x, y, fill, height }, idx) => {
    return (
      <rect
        // eslint-disable-next-line
        key={idx}
        x={x}
        y={y}
        width="2"
        height={height}
        fill={fill}
      />
    )
  })

  const refY = useRef(null)
  const refX = useRef(null)
  const refBrush = useRef(null)

  return (
    <svg width={width} height={height}>
      <g ref={refX} transform={`translate(0, ${height - bottom})`} />
      <g ref={refY} transform={`translate(${left}, 0)`} />
      <g>{rects}</g>
      <g ref={refBrush} />
    </svg>
  )
}

export default Chart
