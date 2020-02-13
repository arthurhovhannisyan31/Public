// external libraries
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from "react"
import { render } from "react-dom"
import * as serviceWorker from "./serviceWorker"
// local services & data store
// local containers & components
import Root from './containers/root'
// local constants & styles
import CONSTS from "./constants"
import './styles/index.scss'

render(<Root/>, document.getElementById(CONSTS.DOM.ROOT))

serviceWorker.unregister()
