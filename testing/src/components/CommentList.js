import React from 'react'
import { connect } from 'react-redux'

const CommentList = props => {
  return (
    <div>
      <h4>Comment List</h4>
      <ul>
        {props.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    comments: state.comments,
  }
}
export default connect(mapStateToProps)(CommentList)
