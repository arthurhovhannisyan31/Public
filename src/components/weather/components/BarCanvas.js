import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

const BarCanvas = (
  // eslint-disable-next-line
  { data, width, height, margin }
) => {
  const refBarCanvas = useRef(null)

  let ctx
  useEffect(() => {
    // eslint-disable-next-line
    ctx = d3.select(refBarCanvas.current)
      .node()
      .getContext('2d')
    // eslint-disable-next-line
    drawBars()
  }, [data])

  const drawBars = () => {
    // eslint-disable-next-line
    data.data.map(({ x, y, fill, height }, idx) => {
      ctx.fillStyle = fill
      ctx.fillRect(x, y, 2, height)
    })
  }

  return (
    <canvas
      ref={refBarCanvas}
      width={width}
      height={height}
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
    />
  )
}

export default BarCanvas
