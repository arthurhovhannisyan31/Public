// external libraries
import React from "react"
// local services & data store
// local containers
// local components
// local constants
// local styles
import "./error.Indicator.style.scss"

const ErrorIndicatorComponent = () => {
  return (
    <div className="error-indicator">
      <div className="container">
        <h1 className="title">Ошибка работы приложения. Зайдите повторно через несколько минут</h1>
        <span>Вы будете перенаправлены через 10 секунд.</span>
      </div>
    </div>
  )
}

export default ErrorIndicatorComponent
