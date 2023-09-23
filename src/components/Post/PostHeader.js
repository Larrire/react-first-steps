import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import { PostHeader as PostHeaderC, PostHeaderTitle } from './styles'

export default function PostHeader(props) {
  return (
    <PostHeaderC>
      <PostHeaderTitle read={props.post.read}>{props.post.title}</PostHeaderTitle>
      <Button onClick={(e) => {
          e.stopPropagation();
          props.onRemove(props.post.id)
        }}>Remove</Button>
    </PostHeaderC>
  )
}

PostHeader.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool
  }).isRequired,
  onRemove: PropTypes.func.isRequired
}