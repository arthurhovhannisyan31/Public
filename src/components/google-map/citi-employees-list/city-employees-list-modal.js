import React from "react"
import Modal from "../../../ui/modal"

import CityEmployeesList from "./city-employees-list.component"

const CityEmployeesListModal = ({ ...props }) => {
  return (
    <Modal {...props}>
      <CityEmployeesList
        {...props}
      />
    </Modal>
  )
}

export default CityEmployeesListModal

