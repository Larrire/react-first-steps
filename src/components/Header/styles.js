import styled from "styled-components";

export const Header = styled.header`
  background-color: cyan;
  margin-bottom: 16px;
`

export const Container = styled.div.attrs({className: 'container'})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`

export const Title = styled.h1`
  color: #333;
`