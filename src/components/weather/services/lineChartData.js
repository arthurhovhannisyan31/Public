import * as d3 from 'd3'

const lineChartData = (data, width, height) => {
  // create scales
  // set domains on the scales
  const [min, max] = d3.extent(data, (d) => d.date)

  const xScale = d3
    .scaleTime()
    .domain([new Date(min), new Date(max)])
    .range([0, width])
  const tempMax = d3.max(data, (d) => d.high)
  const tempMin = d3.min(data, (d) => d.low)

  const yScale = d3.scaleLinear().domain([tempMin, tempMax]).range([height, 0])

  // create and use line generator for high and low temperature
  const lineMin = d3
    .line()
    .x((d) => xScale(new Date(d.date)))
    .y((d) => yScale(d.low))
  const lineMax = d3
    .line()
    .x((d) => xScale(new Date(d.date)))
    .y((d) => yScale(d.high))
  return [
    {
      fill: '#eb6a5b',
      path: lineMin(data),
    },
    {
      fill: '#52b6ca',
      path: lineMax(data),
    },
  ]
}

export default lineChartData
