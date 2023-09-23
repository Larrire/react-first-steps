import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

export default function PostHeader(props) {
  const titleColor = props.post.read
    ? 'purple'
    : 'blue'
    
  return (
    <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
      <h1
        style={{margin: '0', color: titleColor, cursor: 'pointer'}}
        onClick={() => props.onMarkAsRead(props.post.id)}
      >
          {props.post.title}
        </h1>
      <div>
        <Button onClick={() => props.onRemove(props.post.id)}>Remove</Button>
      </div>
    </div>
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