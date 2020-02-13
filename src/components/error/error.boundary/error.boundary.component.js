// external libraries
import React, { Component } from "react"
import PropTypes from "prop-types"
// local services & data store
// local containers & components
import ErrorIndicator from "../error.indicator"
// local constants & styles

/**
 * Возвращает ErrorIndicator при возникновении ошибки
 * в children или при ошибке авторзации, выполняет редирект по таймауту
 */

class ErrorBoundaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch() {
    this.setState(() => ({ hasError: true }))
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return <ErrorIndicator error/>
    }
    return children
  }
}

// const mapStateToProps = (state) => ({
// error: state[moduleName].error
// })

ErrorBoundaryComponent.propTypes = {
  children: PropTypes.node.isRequired
}

// export default connect(mapStateToProps)(ErrorBoundaryComponent)
export default ErrorBoundaryComponent
