// external libraries
import React, {useEffect, useRef, useReducer} from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
// local services & data store
import {validateText, useFocus} from "../../../services/utilities.service"
// local containers
// local components
import InputReadOnly from './input.read-only.component'
import InputDefault from './input.default.component'
// local constants
// local styles
import './input.style.scss'

/**
 * Declare component reducer
 * @param state
 * @param action
 * @returns {*}
 */
const inputReducer = (state, action) => {
  const {type, payload} = action
  switch (type) {
    case 'setError':
      return {...state, error: payload}
    case 'setLimitExceeded':
      return {...state, limitExceeded: payload}
    case 'setContentLength':
      return {...state, contentLength: payload}
    case 'clearAll':
      return {...state,
        error: false,
        limitExceeded: false,
        contentLength: 0
      }
    default:
      return state
  }
}

/**
 * Input main component
 * @param value - sets component visible value
 * @param onChange - returns value from user input
 * @param defaultValue - used set value on component mount and reset
 * @param placeholder - placeholder on value absence
 * @param extraClassName
 * @param regExp - regExp for validate function, used to set error param
 * @param regExpStrict - prevents typing invalid characters into field
 * @param readOnly - set readonly mode
 * @param reset - used to set default value
 * @param maxLength - used to count length left param, set error when exceeded
 * @param maxLengthStrict - prevents typing when limit exceeded
 * @param label - sets label for field
 * @param clearable - displays clear button
 * @param errorText - used to display text on error
 * @param helperText - used to display helper text
 * @param showCount - used to display current/left caracters count
 * @param multiline - used to replace input tah with textarea
 * @returns {*}
 * @constructor
 */
const Input = (
  { value,
    onChange,
    defaultValue,
    placeholder,
    extraClassName,
    regExp,
    regExpStrict,
    readOnly,
    reset,
    maxLength,
    maxLengthStrict,
    label,
    clearable,
    errorText,
    helperText,
    multiline
  }) => {

  /**
   * Declare component initial state
   * @type {{textLength: *, error: boolean, limitExceeded: boolean}}
   */
  const initialState = {
    contentLength: defaultValue?.length ?? 0,
    error: false,
    limitExceeded: false,
  }

  /**
   * Declare state, dispatcher
   */
  const [state, dispatch] = useReducer(inputReducer, initialState)
  const {contentLength, error, limitExceeded} = state

  /**
   * Declare all reducer methods
   */
  const setError = payload => dispatch({type: 'setError', payload})
  const setLimitExceeded = payload => dispatch({type: 'setLimitExceeded', payload})
  const setContentLength = payload => dispatch({type: 'setContentLength', payload})
  const clearAll = () => dispatch({type: 'clearAll'})

  /**
   * Decide whether to set focus/blur handlers listeners
   */
  const [focus, {onBlur, onFocus}] = useFocus()

  /**
   * Resets default value on reset event or if any default value were provided
   */
  useEffect(() => {
    const validDefaultValue = typeof defaultValue === 'string'
    if (validDefaultValue && defaultValue || reset) {
      onChange(defaultValue)
    }
  }, [defaultValue, reset, onChange])

  /**
   * Value validation function
   * @param e
   */
  const validation = e => {

    /**
     * Calculates available space left to type
     */
    const text = e?.target?.value
    if (!text) clearAll()

    /**
     * Check if limit is exceeded
     */
    const textLength = text?.length ?? 0
    const lengthLeft = maxLength - textLength
    const isLengthLeft = lengthLeft >= 0

    /**
     * Check if onChange func provided and length not exceeded on strict mode
     */
    if (onChange && maxLengthStrict ? isLengthLeft : true) {


      if (isLengthLeft) {
        setLimitExceeded(false)
      } else {
        setLimitExceeded(true)
      }

      if (regExp && regExpStrict) {
        /**
         * On strict mode will return only valid input and set error state
         * */
        if (validateText({regExp, text})){
          onChange(text)
          setContentLength(textLength)
        }
      } else if (regExp) {
        /**
         * On weak mode will return value
         * set error state
         * set content length
         */
        setContentLength(textLength)
        onChange(text)
        if (validateText({regExp, text})){
          setError(false)
        } else {
          setError(true)
        }
      } else {
        onChange(text)
      }
    }
  }

  const ref = useRef(null)

  const classNames = ClassNames({
    label,
    clearable,
    focus,
    error,
    [`${extraClassName}`]: extraClassName,
    multiline,
    limitExceeded,
    readOnly
  });

  const Tag = multiline ? 'textarea' : 'input'

  return (
    <div
      className={`input-default ${classNames}`}
      onFocus={!readOnly ? onFocus : undefined}
      onBlur={!readOnly ? onBlur : undefined}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
    >
      <label
        className='input-default__label'
        htmlFor="input-default"
      >
        <span>{label}</span>
      </label>
      {readOnly
       ? <InputReadOnly
          placeholder={placeholder}
          value={value}
          readOnly={readOnly}
          tag={Tag}
        />
        : <InputDefault
            tag={Tag}
            placeholder={placeholder}
            value={value}
            validation={validation}
            error={error}
            errorText={errorText}
            helperText={helperText}
            contentLength={contentLength}
            maxLength={maxLength}
            onChange={onChange}
            clearAll={clearAll}
            ref={ref}
        />
      }
    </div>
  )
}

Input.defaultProps = {
  value: '',
  onChange: ()=>{},
  defaultValue: '',
  placeholder: '',
  extraClassName: '',
  regExp: null,
  regExpStrict: false,
  readOnly: false,
  reset: false,
  maxLength: 200,
  maxLengthStrict: false,
  label: '',
  clearable: false,
  errorText: '',
  helperText: '',
  multiline: false,
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  extraClassName: PropTypes.string,
  regExp: PropTypes.instanceOf(RegExp),
  regExpStrict: PropTypes.bool,
  readOnly: PropTypes.bool,
  reset: PropTypes.bool,
  maxLength: PropTypes.number,
  maxLengthStrict: PropTypes.bool,
  label: PropTypes.string,
  clearable: PropTypes.bool,
  errorText: PropTypes.string,
  helperText: PropTypes.string,
  multiline: PropTypes.bool,
}

export default Input
