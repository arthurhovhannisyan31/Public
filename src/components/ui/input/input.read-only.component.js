// external libraries
import React from 'react'
// local services & data store
// local containers & components
// local constants & styles

const InputReadOnly = (
  { tag,
    placeholder,
    value,
    isDisabled,
    inputId
  }) => {

  const Tag = tag

  return (
    <Tag
      id={inputId}
      className='input__field'
      aria-label='input default'
      type="text"
      placeholder={placeholder}
      value={value}
      readOnly={isDisabled}
    />
  )
}

export default InputReadOnly
