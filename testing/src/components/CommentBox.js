import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'
import requireAuth from './requireAuth'

const CommentBox = props => {
  const { saveComment, fetchComments } = props
  const [comment, setComment] = useState('')

  const handleChange = event => {
    setComment(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    saveComment(comment)
    setComment('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={comment} onChange={handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={fetchComments}>
        Fetch comments
      </button>
    </div>
  )
}

export default requireAuth(connect(null, actions)(CommentBox))
