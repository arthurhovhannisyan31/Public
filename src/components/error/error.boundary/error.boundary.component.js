import React, { Component } from "react"
import PropTypes from "prop-types"
import ErrorIndicator from "../error.indicator"

// import { moduleName } from "../../../redux/auth.reducer"

/**
 * Возвращает ErrorIndicator при возникновении ошибки
 * в children или при ошибке авторзации, выполняет редирект по таймауту
 */

class ErrorBoundaryComponent extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = {
    hasError: false
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

// export default connect(mapStateToProps)(ErrorBoundaryComponent)
export default ErrorBoundaryComponent
