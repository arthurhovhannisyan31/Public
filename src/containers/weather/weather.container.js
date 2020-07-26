// external libraries
import React, { useContext, useEffect, useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
// import {} from 'reselect'
// local services & data store
import { moduleName as weatherModuleName } from '../../store/weather/constants'
import { HelmetContext } from '../../contexts'
import {
  getWeatherAllDataAction,
  getWeatherDataAction
} from '../../store/weather/actions'
// local containers & components
import {
  BarChart,
  LineChart,
  RadialChart,
  BarCanvasChart,
  RadialCanvasChart
} from '../../components/weather'
import { NY_JSON, SF_JSON } from '../../store/weather/services'
// local constants & styles
import style from './weather.styles.scss'
import { Map } from 'immutable'

const options = [
  {
    label: 'NY',
    value: NY_JSON
  },
  {
    label: 'SF',
    value: SF_JSON
  }
]

const Weather = () => {
  const { title } = useContext(HelmetContext)

  const dispatchGlobal = useDispatch()

  // todo add reselect
  const { loading, error, data, allData, range } = useSelector(
    (state) => state[weatherModuleName],
    shallowEqual
  )
  console.log(loading, error, data, allData, range)

  const [city, setCity] = useState(options[0])

  useEffect(() => {
    dispatchGlobal(
      getWeatherDataAction({
        source: city.value
      })
    )
  }, [city])

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="weather-container">
        {/*<Select*/}
        {/*  value={city}*/}
        {/*  onChange={ ({label, value}) => {*/}
        {/*    setCity( state => ({ label, value }) )*/}
        {/*  }}*/}
        {/*  options={options}*/}
        {/*/>*/}
        {/*<BarChart*/}
        {/*  data={data}*/}
        {/*  range={range}*/}
        {/*  updateBrushRange={updateBrushRange}*/}
        {/*  {...props}*/}
        {/*/>*/}
        {/*<BarCanvasChart*/}
        {/*  data={data}*/}
        {/*  range={range}*/}
        {/*  {...props}*/}
        {/*/>*/}
        {/*<LineChart*/}
        {/*  data={data}*/}
        {/*  {...props}*/}
        {/*/>*/}
        {/*<RadialChart*/}
        {/*  data={data}*/}
        {/*  {...props}*/}
        {/*/>*/}
        {/*<RadialCanvasChart*/}
        {/*  data={data}*/}
        {/*  {...props}*/}
        {/*/>*/}
      </div>
    </>
  )
}

export default Weather
