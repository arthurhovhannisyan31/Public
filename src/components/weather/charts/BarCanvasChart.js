import React from 'react'
import barChartData from '../services/barChartData'
import { BarCanvas } from '../components'

const width = 800
const height = 400
const margin = {
  top: 20,
  right: 5,
  bottom: 20,
  left: 35,
}

const BarCanvasChart = ({ data: tempData, range, loading, error }) => {
  const data =
    tempData &&
    barChartData({
      tempData,
      width,
      height,
      margin,
      range,
    })

  return (
    <div>
      <h3>CanvasChart</h3>
      {data && !loading && !error && (
        <BarCanvas data={data} width={width} height={height} margin={margin} />
      )}
    </div>
  )
}

export default BarCanvasChart
