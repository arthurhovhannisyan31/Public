import * as d3 from 'd3'

const xScaleGenerator = ({ xExtent, min, max }) =>
  d3.scaleTime()
    .domain(xExtent)
    .range([min, max])

const yScaleGenerator = ({ yExtent, min, max }) =>
  d3.scaleLinear()
    .domain(yExtent)
    .range([min, max])

const barChartData = ({ tempData: data, width, height, margin, range }) => {
  const { top, right, bottom, left } = margin

  // 1. map date to x-position
  // get min and max of date
  const xExtent = d3.extent(data, (d) => d.date)
  const xScale = xScaleGenerator({
    xExtent,
    min: left,
    max: width - right
  })

  // 2. map high temp to y-position
  // get min/max of high temp

  const [min, max] = d3.extent(data, (d) => d.high)
  const yScale = yScaleGenerator({
    yExtent: [Math.min(min, 0), max],
    min: height - bottom,
    max: top
  })

  // 3. map average temp to color
  // get min/max of avg
  const colorExtent = d3.extent(data, (d) => d.avg)
    .reverse()
  const colorScale = d3
    .scaleSequential()
    .domain(colorExtent)
    .interpolator(d3.interpolateRdYlBu)

  // min/max high
  // const highExtent = d3
  //   .extent(data, d => d.high);
  // min/max low
  // const lowExtent = d3
  //   .extent(data, d => d.low);
  // array of objects: x, y, height

  // set axis for x and y
  const yAxis = d3.axisLeft()
    .scale(yScale)
  const xAxis = d3.axisTop()
    .scale(xScale)

  return {
    data: data.map((d) => {
      const isColored =
        !range.length || (range[0] < d.date && d.date < range[1])
      return {
        x: xScale(d.date),
        y: yScale(d.high),
        height: yScale(d.low) - yScale(d.high),
        fill: isColored ? colorScale(d.avg) : '#ccc'
      }
    }),
    yAxis,
    xAxis,
    xScale,
    yScale
  }
}

export default barChartData
