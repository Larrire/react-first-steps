import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../context/ThemeContext';

export default function Button(props) {
  const {label, onClick, ...rest} = props;

  const { theme } = useContext(ThemeContext);

  const themeStyle = theme === 'dark'
    ? { background: 'black', color: 'white' }
    :  { background: 'white', color: 'black' }

  const buttonStyle = {
    ...themeStyle,
    border: 0,
    padding: '8px',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)'
  }

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      {...rest}
    >
    {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}