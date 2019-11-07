import React from "react"

import Button from "../../button"

import "./fast-grow-mock.style.scss"

const FastGrowMock = ({ ...props }) => {

  const { setCategory } = props

  return (
    <div className="fastGrowMock">
      <span className="mock__title">Значительных изменений не зафиксировано</span>
      <Button
        extraClass="mock__button"
        onClick={() => {
          setCategory("Текущие командировки")
        }}
      >
        Посмотреть текущие командировки
      </Button>
    </div>
  )
}

export default FastGrowMock
