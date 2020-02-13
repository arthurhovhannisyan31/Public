// external libraries
import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import ClassNames from "classnames"
import CustomScroll from "react-custom-scroll"
// local services & data store
import {useFocus, randomString} from "../../../services/utilities.service"
// local containers
// local components
import {
  ClearIndicator,
  DropdownIndicator,
  SearchIndicator,
} from './components'
// local constants
// local styles
import './select.style.scss'

const randId = randomString()

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
    // inputValue,
    onInputChange,
    label,
  }) => {

  const [focus, {onFocus, onBlur}] = useFocus()

  const classNames = ClassNames({
    value,
    focus,
  });

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
        <span className='select-default__label'>{label}</span>
      </label>
      <div>
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
          // inputValue={inputValue}
          onInputChange={onInputChange}
          components={{
            ClearIndicator,
            DropdownIndicator: (
              isSearchable
                ? SearchIndicator
                : DropdownIndicator
            ),
            MenuList: props =>
              customMenu(props)
          }}
        />
      </div>
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
  // inputValue: null,
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
  // inputValue: PropTypes.string,
  onInputChange: PropTypes.func,
  label: PropTypes.string,
}

export default SelectDefault

// debounce for search field
// dropdown list width = input field width
// dropdown menu continues select btn borders, border body stretches down
// add react custom scroll to menu
