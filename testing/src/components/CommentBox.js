import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'
const CommentBox = props => {
  const [comment, setComment] = useState('')
  const handleChange = event => {
    setComment(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    props.saveComment()
    setComment('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a Comment</h4>
      <textarea value={comment} onChange={handleChange} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  )
}

export default connect(null, actions)(CommentBox)
