// external libraries
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
// local services & data store
import { validateText} from "../../../services/utilities.service"
// local containers
// local components
// local constants
import CONSTS from "../../../constants"
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
    lang,
    readOnly,
    reset,
    maxLength,
    tooltipValue,
    labelValue,
  }) => {

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

  return (
    <div
      className={`input-default ${extraClassName}`}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
    >
      {tooltipValue && showTooltip &&
        <ReactTooltip
          id={`input-default__${lang}`}
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
          <span>{tooltipValue}</span>
        </ReactTooltip>
      }
      <label
        className={`error-${showError}`}
        htmlFor="input-default"
      >
        <span>{labelValue}</span>
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
        data-for={`input-default__${lang}`}
        readOnly={readOnly}
      />
    </div>
  )
}

Input.defaultProps = {
  defaultValue: '', // ?
  placeholder: '',
  extraClassName: '',
  regExp: null,
  regExpStrict: false,
  lang: CONSTS.LANG.RUS.value,
  readOnly: false,
  reset: false,
  maxLength: Infinity,
  tooltipValue: '',
  labelValue: '',
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string, // ?
  placeholder: PropTypes.string,
  extraClassName: PropTypes.string,
  regExp: PropTypes.instanceOf(RegExp),
  regExpStrict: PropTypes.bool,
  lang: PropTypes.string,
  readOnly: PropTypes.bool,
  reset: PropTypes.bool,
  maxLength: PropTypes.number,
  tooltipValue: PropTypes.string,
  labelValue: PropTypes.string,
}

export default Input
