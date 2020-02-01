// external libraries
import React from "react"
import { Switch } from 'react-router-dom'
// local services & data store
// local containers
import Layout from "../layout"
import {rootRoutes, appRoutes} from "../../routes"
// local components
// local constants
// local styles
import './app.container.style.scss'

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Switch>
          {appRoutes}
          {rootRoutes}
        </Switch>
      </Layout>
    </div>
  )
}

export default App
