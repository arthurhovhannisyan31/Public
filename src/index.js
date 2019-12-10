// external libraries
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from "react"
import { render } from "react-dom"
import * as serviceWorker from "./serviceWorker"
// local containers
import Root from './containers/root'
// local constants
import CONSTS from "./constants"

render(<Root/>, document.getElementById(CONSTS.DOM.ROOT))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
