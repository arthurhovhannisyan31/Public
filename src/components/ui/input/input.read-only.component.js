// external libraries
import React from 'react'
// local services & data store
// local containers
// local components
// local constants
// local styles

const InputReadOnly = (
  { tag,
    placeholder,
    value,
    isDisabled,
    inputId
  }) => {

  const Tag = tag;

  return (
    <Tag
      id={inputId}
      className='input-default__field'
      aria-label='input default'
      type="text"
      placeholder={placeholder}
      value={value}
      readOnly={isDisabled}
    />
  )
}

export default InputReadOnly
