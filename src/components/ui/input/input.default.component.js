// external libraries
import React, {forwardRef} from 'react'
// local services & data store
// local containers & components
import Icon from "../icons/icon.component"

// local constants & styles

const InputDefault = (
  { tag,
    placeholder,
    value,
    validation,
    error,
    errorText,
    helperText,
    contentLength,
    showCounter,
    maxLength,
    onChange = () => {},
    clearAll,
    inputId,
    type,
  }, _ref) => {

  const Tag = tag;

  return (
    <>
      <div className='input__field_container'
      >
        <Tag
          className='input__field'
          aria-label='input default'
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={validation}
          ref={_ref}
          id={inputId}
        />
        <button
          type='button'
          className='input__clear'
          onClick={() => {
            onChange('')
            clearAll()
            _ref.current.focus()
          }}
        >
          <Icon
            label='clear-light'
          />
        </button>
      </div>
      <div className='input__extra-info'>
        <div className='input__extra-info_left'>
          {error
            ? <span className='input__error-text'>{errorText}</span>
            : <span className='input__helper-text'>{helperText}</span>
          }
        </div>
        <div className='input__extra-info_right'>
          {showCounter && <span className='input__counter'>{contentLength}/{maxLength}</span>}
        </div>
      </div>
    </>
  )
}

export default forwardRef(InputDefault)
