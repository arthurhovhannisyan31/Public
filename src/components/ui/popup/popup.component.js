import React from "react"
import closeIcon from "../modal/close.svg"

import "./popup.style.scss"

const Popup = ({ ...props }) => {
  const { title, onCloseBtn, children, style, isOpen } = props

  const content = (
    <div id="detail-popup" className="popup-wrap" style={style}>
      <div className="popup-head">
        <span>{title}</span>
        <button type="button" onClick={() => onCloseBtn()}>
          <img src={closeIcon} alt="close"/>
        </button>
      </div>
      <div className="popup-body">{children}</div>
    </div>
  )

  if (!isOpen) return null

  return <div className="popup">{content}</div>
}

export default Popup
