import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import { ThemeContext } from '../../context/ThemeContext'

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)
  return (
    <header>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h1 style={{margin: 0}}>{props.title}</h1>
        <div>
          <Button onClick={onToggleTheme}>Toggle theme</Button>
        </div>
      </div>
      {props.children}
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Header.defaultProps = {
  title: 'My App'
}