import * as d3 from 'd3'

// eslint-disable-next-line
const radialChartData = ({ data, height, width }) => {
  const tempMin = d3.min(data, (d) => d.low)
  const tempMax = d3.max(data, (d) => d.high)
  const [minAvg, maxAvg] = d3.extent(data, (d) => d.avg)

  const radiusScale = d3
    .scaleLinear()
    .range([0, width / 2])
    .domain([tempMin, tempMax])
  const colorScale = d3
    .scaleSequential(d3.interpolateRdYlBu)
    .domain([maxAvg, minAvg])

  // one arc per day, innerRadius is low temp, outerRadius is high temp
  const arcGenerator = d3.arc()
  const perSliceAngle = (2 * Math.PI) / data.length

  const tempAnnotations = [5, 20, 40, 60, 80].map((temp) => {
    return {
      r: radiusScale(temp),
      temp
    }
  })

  const slices = data.map((d, i) => {
    return {
      fill: colorScale(d.avg),
      path: arcGenerator({
        startAngle: i * perSliceAngle,
        endAngle: (i + 1) * perSliceAngle,
        innerRadius: radiusScale(d.low),
        outerRadius: radiusScale(d.high)
      }),
      arcData: {
        startAngle: i * perSliceAngle,
        endAngle: (i + 1) * perSliceAngle,
        innerRadius: radiusScale(d.low),
        outerRadius: radiusScale(d.high)
      }
    }
  })

  return {
    slices,
    tempAnnotations
  }
}

export default radialChartData
