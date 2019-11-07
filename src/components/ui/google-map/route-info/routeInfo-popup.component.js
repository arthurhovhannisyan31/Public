import React from "react"
import PropTypes from "prop-types"

import Popup from "../../popup"
import RouteInfoPopupItem from "./routeInfo-popup-item.component"

import "./routeInfo-popup.style.scss"

const RouteInfoPopup = ({ routes, ...props }) => {
  const { isOpen, setCurrentDirection } = props

  const routeInfoPopupItems = routes.map((el, id) => {
    return (
      <RouteInfoPopupItem
        /* eslint-disable-next-line react/no-array-index-key */
        key={`RouteInfoPopupItem-${id}`}
        id={id}
        element={el}
        {...props}
      />
    )
  })

  const content = (
    <div className="routeInfoPopup-wrap">
      <Popup
        isOpen
        title='Направления'
        onCloseBtn={() => {
          setCurrentDirection([])
        }}
      >
        {routes && routeInfoPopupItems}
      </Popup>
    </div>
  )

  return (
    <div className="routeInfoPopup">
      {isOpen && content}
    </div>
  )
}

RouteInfoPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setCurrentDirection: PropTypes.func.isRequired
}

export default RouteInfoPopup
