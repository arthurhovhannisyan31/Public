// external libraries
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from "react"
import { render } from "react-dom"
import * as serviceWorker from "./serviceWorker"
// local services & data store
// local containers
import Root from './containers/root'
// local components
// local constants
import CONSTS from "./constants"
// local styles

render(<Root/>, document.getElementById(CONSTS.DOM.ROOT))

serviceWorker.unregister()
// test
