// external libraries
import React from 'react'
import PropTypes from 'prop-types'
// local services & data store
// local containers & components
import Icon from "../../icons/icon.component"
import {SubTitle} from "../../../text-containers"
// local constants & styles
import CONSTS from "../../../../constants"
import './toggle-sidebar.style.scss'

const ToggleSidebar = ({collapse, setCollapse}) => {

  return (
    <div className='toggle-sidebar'>
      <button
        id='toggle-sidebar'
        type='button'
        onClick={() => {
          setCollapse(val=>!val)
        }}
      >
        { collapse
          ? <Icon label='nav-menu-toggle-on' colorMain={CONSTS.COMPONENTS.STYLES.COLORS.PRIMARY} opacityMain={1}/>
          : <Icon label='nav-menu-toggle-off'/>
        }
      </button>
      <label htmlFor='toggle-sidebar'>
        {!collapse && <SubTitle>Toggle sidebar</SubTitle> }
      </label>
    </div>
  )
}

ToggleSidebar.defaultProps = {
  collapse: false,
  setCollapse: ()=>{},
}

ToggleSidebar.propTypes = {
  collapse: PropTypes.bool,
  setCollapse: PropTypes.func
}

export default ToggleSidebar
