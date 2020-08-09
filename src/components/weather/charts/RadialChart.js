import React from 'react'
import { Radial } from '../components'
import radialChartData from '../services/radialChartData'

const RadialChart = ({ data: tempData, fetching, error }) => {
  const width = 500
  const height = 600

  const data =
    tempData &&
    radialChartData({
      data: tempData,
      height,
      width,
    })
  if (!data) return <h1>Loading</h1>

  return (
    <div>
      <h3>RadialChart</h3>
      {data && !fetching && !error && (
        <Radial width={width} height={height} data={data} />
      )}
    </div>
  )
}

export default RadialChart
