import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

const RadialCanvas = ({ width, height, data }) => {
  // eslint-disable-next-line
  const { slices, tempAnnotations } = data
  const refRadialCanvas = useRef(null)
  const arcGenerator = d3.arc()

  let ctx
  useEffect(() => {
    // eslint-disable-next-line
    ctx = d3.select(refRadialCanvas.current)
      .node()
      .getContext('2d')
    ctx.translate(width / 2, height / 2)
    arcGenerator.context(ctx)
    // eslint-disable-next-line
    drawSlices()
  }, [data, width])

  const drawSlices = () => {
    slices.forEach((el) => {
      ctx.fillStyle = el.fill
      ctx.beginPath()
      arcGenerator(el.arcData)
      ctx.fill()
    })
  }

  return <canvas ref={refRadialCanvas} width={width} height={height}/>
}

export default RadialCanvas
