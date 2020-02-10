import React, {forwardRef} from 'react'
import Icon from "../icons/icon.component"

const InputDefault = (
  { tag,
    placeholder,
    value,
    validation,
    error,
    errorText,
    helperText,
    contentLength,
    maxLength,
    onChange,
    clearAll,
  }, _ref) => {

  const Tag = tag;

  return (
    <>
      <Tag
        id='input-default'
        className='input-default__field'
        aria-label='input default'
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={validation}
        ref={_ref}
      />
      <div className='input-default__extra-info'>
        <div className='input-default__extra-info_left'>
          {error
            ? <span className='input-default__error-text'>{errorText}</span>
            : <span className='input-default__helper-text'>{helperText}</span>
          }
        </div>
        <div className='input-default__extra-info_right'>
          {maxLength && <span className='input-default__counter'>{contentLength}/{maxLength}</span>}
        </div>
      </div>
      <button
        type='button'
        className='input-default__clear'
        onClick={() => {
          onChange('')
          clearAll()
          _ref.current.focus()
        }}
      >
        <Icon
          label='clear'
        />
      </button>
    </>
  )
}

export default forwardRef(InputDefault)
