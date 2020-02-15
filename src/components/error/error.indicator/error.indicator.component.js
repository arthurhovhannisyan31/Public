// external libraries
import React from "react"
// local services & data store
// local containers & components
// local constants & styles
import "./error.Indicator.style.scss"

const ErrorIndicatorComponent = () => {
  return (
    <div className="error-indicator">
      <div className="error-indicator__container">
        <h1 className="error-indicator__title">Ошибка работы приложения. Зайдите повторно через несколько минут</h1>
        <span>Вы будете перенаправлены через 10 секунд.</span>
      </div>
    </div>
  )
}

export default ErrorIndicatorComponent
