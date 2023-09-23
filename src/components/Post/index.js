import React from 'react'
import PropTypes from 'prop-types'
import PostHeader from './PostHeader'
import { mergeClass } from '../../helpers'
import { Post as PostC } from './styles'

export default function Post(props) {
  return (
    <PostC
      onClick={e => {
        if (props.post.removed) return
        props.onMarkAsRead(props.post.id)
      }}
      removed={props.post.removed}
    >
      <PostHeader
        post={props.post}
        onRemove={props.onRemove}
        onMarkAsRead={props.onMarkAsRead}
      />
      <p>{props.post.subtitle}</p>
      Likes: {props.post.likes}
    </PostC>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    read: PropTypes.bool
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onMarkAsRead: PropTypes.func.isRequired,
}