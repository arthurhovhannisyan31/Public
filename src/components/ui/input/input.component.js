// external libraries
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
// local services & data store
import {randomString, validateText} from "../../../services/utilities.service"
// local containers
// local components
// local constants
// local styles
import './input.style.scss'

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
    tooltip,
    label,
  }) => {

  // add clearable prop

  /**
   * Decide whether to set focus/blur handlers listeners
   */
  const [showError, setShowError] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  /**
   * Resets default value on reset event or if any default value were provided
   */
  useEffect(() => {
    if (defaultValue || reset) {
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
    /**
     * Add 1 to include last character in count
     * @type {number}
     */
    const lengthLeft = maxLength - text?.length + 1

    if (onChange && lengthLeft) {
      if (regExp && regExpStrict) {
        /** On strict mode will return only valid input and set error state
         * */
        if (validateText({regExp, text})){
          setShowTooltip(false)
          onChange(text)
        } else {
          setShowTooltip(true)
        }
      } else if (regExp) {
        /** On weak mode will return value and set error state
         */
        onChange(text)
        if (validateText({regExp, text})){
          setShowError(false)
        } else {
          setShowError(true)
        }
      } else {
        onChange(text)
      }
    }
  }

  const randId = randomString()

  return (
    <div
      className={`input-default ${extraClassName} label-${!!label}`}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
    >
      {tooltip && showTooltip &&
        <ReactTooltip
          id={`input-default__${randId}`}
          className='input-default__tooltip'
          effect='solid'
          place='bottom'
          type='warning'
          scrollHide
          resizeHide
          globalEventOff='click'
          disable={!showTooltip}
          offset={{bottom: '-5px'}}
        >
          <span>{tooltip}</span>
        </ReactTooltip>
      }
      <label
        className={`input-default__label error-${showError}`}
        htmlFor="input-default"
      >
        <span>{label}</span>
      </label>
      <input
        id='input-default'
        className={`error-${showError}`}
        aria-label='input default'
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={validation}
        // eslint-disable-next-line
        data-tip={true}
        data-for={`input-default__${randId}`}
        readOnly={readOnly}
      />
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
  maxLength: Infinity,
  tooltip: '',
  label: '',
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
  tooltip: PropTypes.string,
  label: PropTypes.string,
}

export default Input
