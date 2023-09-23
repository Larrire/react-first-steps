import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import { ThemeContext } from '../../context/ThemeContext'
import { Container, Header as HeaderC, Title } from './styles'

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)
  return (
    <HeaderC>
      <Container>
        <Title>{props.title}</Title>
        <Button onClick={onToggleTheme}>Toggle theme</Button>
      </Container>
    </HeaderC>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Header.defaultProps = {
  title: 'My App'
}