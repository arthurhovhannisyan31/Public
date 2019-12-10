// external libraries
import React from "react"

const NoData = ({ error, noData }) => {

  return (
    <div>
      {error && <h1>Error loading data</h1>}
      {noData && <h1>No data supplied</h1>}
    </div>
  )
}

export default NoData
