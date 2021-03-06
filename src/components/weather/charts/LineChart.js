import React from 'react'
import lineChartData from '../services/lineChartData'
import { Line } from '../components'

const LineChart = ({ data: tempData, loading, error }) => {
  const width = 800
  const height = 400

  const data = tempData && lineChartData(tempData, width, height)

  return (
    <div>
      <h3>LineChart</h3>
      {data && !loading && !error && (
        <Line data={data} width={width} height={height} />
      )}
    </div>
  )
}

export default LineChart
