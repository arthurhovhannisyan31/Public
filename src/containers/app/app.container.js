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

const App = () => {
  return (
    <div className="App">
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
