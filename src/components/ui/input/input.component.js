// external libraries
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
// local services & data store
import {useHover, validateText} from "../../../services/utilities.service"
// local containers
// local components
// local constants
import CONSTS from "../../../constants"
// local styles
import './input.style.scss'

const Input = (
  { placeholder,
    extraClassName,
    value,
    defaultValue,
    onChange,
    regExp,
    lang,
    readOnly,
    reset,
    maxLength,
    tooltipValue,
    labelValue,
    onFocus: whenFocus,
    onBlur: whenBlus
  }) => {

  // error condition
  // tooltip

  const [showTooltip, setShowTooltip] = useState(false)
  const [hover, {onMouseOver, onFocus, onMouseOut, onBlur}] = useHover()

  /**
   * ????????????/
   */
  useEffect(() =>
    hover ? whenFocus() : whenBlus(),
    [hover]
  )

  /**
   * Resets default value on reset event or if any default value were provided
   */
  useEffect(() =>
    (defaultValue || reset) &&
    onChange(defaultValue),
    [defaultValue, reset, onChange]
  )

  /**
   * Value validation function
   * @param e
   */
  const validation = e => {
    /**
     * Calculates available space left to type
     */
    const lengthLeft = maxLength - e?.target?.value?.length - 1
    const text = e.target.value

    if (lengthLeft) {
      if (regExp) {
        if (validateText({regExp, text})){
          onChange(text)
          setShowTooltip(false)
        } else {
          setShowTooltip(true)
        }
      } else {
        onChange(text)
      }
    }
  }

  return (
    <div
      className={`input-default ${extraClassName}`}
      onMouseOver={onMouseOver}
      onFocus={onFocus}
      onMouseOut={onMouseOut}
      onBlur={onBlur}
    >
      {showTooltip &&
        <ReactTooltip
         id={`input-default__${lang}`}
         className='input-default__tooltip'
         effect='solid'
         place='bottom'
         type='light'
         scrollHide
         resizeHide
         globalEventOff='click'
         disable={!showTooltip}
         offset={{bottom: '-5px'}}
        >
          <span>{tooltipValue}</span>
        </ReactTooltip>
      }
      <label htmlFor="input-default">
        <span>{labelValue}</span>
      </label>
      <input
        id='input-default'
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
  extraClassName: '',
  placeholder: '',
  value: '',
  defaultValue: null, // ?
  regExp: null,
  lang: CONSTS.LANG.RUS,
  onChange: null,
  readOnly: false,
  reset: false,
  maxLength: Infinity,
  tooltipValue: '',
  labelValue: '',
  whenFocus: null,
  whenBlur: null,
}

Input.propTypes = {
  extraClassName: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string, // ?
  regExp: PropTypes.instanceOf(RegExp),
  lang: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  reset: PropTypes.string,
  maxLength: PropTypes.number,
  tooltipValue: PropTypes.string,
  labelValue: PropTypes.string,
  whenFocus: PropTypes.func,
  whenBlur: PropTypes.func,
}

export default Input
