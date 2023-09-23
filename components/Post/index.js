import React from 'react'
import PropTypes from 'prop-types'
import PostHeader from './PostHeader'

export default function Post(props) {
  return (
    <article style={{border: '1px solid lightgray', marginBottom: '16px', padding: '8px'}}>
      <PostHeader
        post={props.post}
        onRemove={props.onRemove}
        onMarkAsRead={props.onMarkAsRead}
      />
      <h3>{props.post.subtitle}</h3>
      Likes: {props.post.likes}
    </article>
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