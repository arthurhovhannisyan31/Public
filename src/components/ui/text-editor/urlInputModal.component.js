import React from "react"

import Modal from "../modal"
import Button from "../button"

const UrlInputModal = ({ ...props }) => {
  const {
    onURLChange,
    URLValue,
    onLinkInputKeyDown,
    confirmLink
  } = props
  return (
    <Modal {...props} modalTitle="Добавление ссылки">
      <div className="ULRInput">
        <input
          type="text"
          onChange={onURLChange}
          ref={input => input && input.focus()}
          value={URLValue}
          onKeyDown={onLinkInputKeyDown}
        />
        <Button
          onClick={confirmLink}
          type="button"
          color="green"
        >
          Добавить
        </Button>
      </div>
    </Modal>
  )
}

export default UrlInputModal

