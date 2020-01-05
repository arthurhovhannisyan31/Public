import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import closeIcon from './close.svg';
import './modal.style.scss';

ReactModal.setAppElement('#root');

const Modal = ({
  isOpen,
  handleCloseModal,
  modalTitle,
  children,
  className,
  modalDatePicker
}) => {
  const [shade, setShade] = useState(false);
  const [trans, setTrans] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setShade(true);
        if (modalDatePicker) setTrans(true);
      }, 1);
    } else {
      setShade(false);
      setTrans(false);
    }
  }, [setShade, setTrans, isOpen, modalDatePicker]);

  const disableScrolling = () => {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };
  };

  const enableScrolling = () => {
    window.onscroll = () => {};
  };

  const classModal = {
    modal: true,
    [`${className}`]: !!className,
    [`trans-${trans}`]: true,
    [`date-picker`]: modalDatePicker
  };

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="modal"
      onRequestClose={handleCloseModal}
      className={classModal}
      overlayClassName={`overlay shade-${shade}`}
      onAfterOpen={isOpen ? disableScrolling() : enableScrolling()}
    >
      <div className="modal-header">
        <h2>{modalTitle}</h2>
        <button type="button" onClick={handleCloseModal}>
          <img src={closeIcon} alt="close" />
        </button>
      </div>
      {children}
    </ReactModal>
  );
};

Modal.propsType = {
  isOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  modalTitle: PropTypes.string,
  children: PropTypes.node
};

Modal.defaultProps = {
  isOpen: false,
  handleCloseModal: null,
  modalTitle: null,
  children: null
};

export default Modal;

// TODO: add react animation to open and close modal
