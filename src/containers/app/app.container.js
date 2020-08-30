// external libraries
import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'
// local services & data store
// local containers & components
import Layout from '../layout'
import { rootRoutes, appRoutes } from '../../routes'
// local constants & styles
import './app.container.style.scss'

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Suspense fallback="Loading...">
          <Switch>
            {appRoutes}
            {rootRoutes}
          </Switch>
        </Suspense>
      </Layout>
    </div>
  )
}

export default App
