import React from "react"

const ULRInput = (
  {
    onURLChange,
    URLValue,
    onLinkInputKeyDown,
    confirmLink
  }) => {
  return (
    <div className="ULRInput">
      <input
        type="text"
        onChange={onURLChange}
        ref={input => input && input.focus()}
        value={URLValue}
        onKeyDown={onLinkInputKeyDown}
      />
      <button
        onClick={confirmLink}
        type="button"
      >
        Confirm
      </button>
    </div>
  )
}

export default ULRInput

