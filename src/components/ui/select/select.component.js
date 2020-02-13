// external libraries
import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import ClassNames from "classnames"
import CustomScroll from "react-custom-scroll"
// local services & data store
// local containers & components
import {useFocus, randomString} from "../../../services/utilities.service"
import {ClearIndicator, DropdownIndicator, SearchIndicator,} from './components'
// local constants & styles
import './select.style.scss'

/**
 * Random string for id
 * @type {string}
 */
const randId = randomString()

/**
 * Select default component
 * @param value
 * @param defaultValue
 * @param placeholder
 * @param onChange
 * @param options
 * @param autoFocus
 * @param className
 * @param classNamePrefix
 * @param isDisabled
 * @param isMulti
 * @param isSearchable
 * @param isLoading
 * @param isClearable
 * @param onInputChange
 * @param label
 * @returns {*}
 * @constructor
 */
const SelectDefault = (
  { value,
    defaultValue,
    placeholder,
    onChange,
    options,
    autoFocus,
    className,
    classNamePrefix,
    isDisabled,
    isMulti,
    isSearchable,
    isLoading,
    isClearable,
    onInputChange,
    label,
  }) => {

  const [focus, {onFocus, onBlur}] = useFocus()
  const classNames = ClassNames({
    focus,
  });

  /**
   * Returns indicator for select component
   */
  const searchDropdownIndicatorTernary = isSearchable
    ? SearchIndicator
    : DropdownIndicator

  const indicator = isClearable
    ? !value && searchDropdownIndicatorTernary
    : searchDropdownIndicatorTernary

  /**
   * Returns dropdown menu wrapped with custom scroll
   */
  const customMenu = ({children}) => (
    <CustomScroll>
      <div className='__menu-container'
      >
        {children}
      </div>
    </CustomScroll>
  )

  const ref = useRef(null)

  return (
    <div
      className={`select-default ${classNames}`}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={randId}>
        {label && <span className='select-default__label'>{label}</span>}
      </label>
      <Select
        ref={ref}
        inputId={randId}
        autoFocus={autoFocus}
        className={`select-default__container ${className}`}
        classNamePrefix={`select ${classNamePrefix}`}
        isDisabled={isDisabled}
        isMulti={isMulti}
        isSearchable={isSearchable}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        isLoading={isLoading}
        isClearable={isClearable}
        onInputChange={onInputChange}
        components={{
          ClearIndicator,
          DropdownIndicator: indicator,
          MenuList: props => customMenu(props)
        }}
      />
    </div>
  )
}

SelectDefault.defaultProps = {
  value: null,
  defaultValue: null,
  placeholder: 'Select...',
  onChange: ()=>{},
  options: [],
  autoFocus: false,
  className: '',
  classNamePrefix: '',
  isDisabled: false,
  isMulti: false,
  isSearchable: false,
  isLoading: false,
  isClearable: false,
  onInputChange: ()=>{},
  label: '',
}

SelectDefault.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.string})
    ),
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string})
    ]
  ),
  defaultValue: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.string})
    ),
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string})
  ]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string
    })
  ),
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  classNamePrefix: PropTypes.string,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isLoading: PropTypes.bool,
  isClearable: PropTypes.bool,
  onInputChange: PropTypes.func,
  label: PropTypes.string,
}

export default SelectDefault
