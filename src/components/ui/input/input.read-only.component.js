import React from 'react'

const InputReadOnly = (
  { tag,
    placeholder,
    value,
    readOnly
  }) => {

  const Tag = tag;

  return (
    <Tag
      id='input-default'
      className='input-default__field'
      aria-label='input default'
      type="text"
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
    />
  )
}

export default InputReadOnly
