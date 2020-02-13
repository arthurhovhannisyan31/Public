// external libraries
import React, {forwardRef} from 'react'
import CustomScroll from "react-custom-scroll"
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
    onChange,
    clearAll,
    inputId,
  }, _ref) => {

  const Tag = tag;

  return (
    <>
      <div className='input-default__field_container'
      >
        <Tag
          className='input-default__field'
          aria-label='input default'
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={validation}
          ref={_ref}
          id={inputId}
        />
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
      </div>
      <div className='input-default__extra-info'>
        <div className='input-default__extra-info_left'>
          {error
            ? <span className='input-default__error-text'>{errorText}</span>
            : <span className='input-default__helper-text'>{helperText}</span>
          }
        </div>
        <div className='input-default__extra-info_right'>
          {showCounter && <span className='input-default__counter'>{contentLength}/{maxLength}</span>}
        </div>
      </div>
    </>
  )
}

export default forwardRef(InputDefault)
