import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Modal from '../../../ui/modal';

import CityEmployeesList from './city-employees-list.component';

const CityEmployeesListModal = ({ ...props }) => {
  return (
    <Modal {...props}>
      <CityEmployeesList {...props} />
    </Modal>
  );
};

export default CityEmployeesListModal;
