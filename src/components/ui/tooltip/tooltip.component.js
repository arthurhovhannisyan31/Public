import React from 'react'
import { useHover } from '../../../services/utilities.service'

const styles = {
  container: {
    position: 'relative',
    display: 'flex'
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    left: '50%',
    bottom: '100%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'rgba(255, 255, 255, 0.2',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px'
  }
}

const Tooltip = ({text, children}) => {
  const [hovering, attrs] = useHover()

  return (
    <div style={styles.container}{...attrs}>
      {hovering && <div style={styles.tooltip}>{text}</div>}
      {children}
    </div>
  )
}

export default Tooltip

