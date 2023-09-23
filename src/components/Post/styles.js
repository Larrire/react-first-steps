import styled from "styled-components";

export const Post = styled.div`
  margin-bottom: 8px;
  padding: 8px;
  background-color: #bbb;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 8px;

  opacity: ${props => props.removed ? '0.25' : '1'};
`

export const PostHeader = styled.div`
  display: flex;
  justify-content:space-between;
`

export const PostHeaderTitle = styled.h3`
  color: ${props => props.read ? 'purple' : 'blue'}
`