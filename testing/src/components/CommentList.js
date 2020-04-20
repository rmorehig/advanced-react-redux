import React from 'react'
import { connect } from 'react-redux'

const CommentList = props => {
  return (
    <ul>
      {props.comments.map((comment, index) => (
        <li key={index}>{comment}</li>
      ))}
    </ul>
  )
}
const mapStateToProps = state => {
  return {
    comments: state.comments,
  }
}
export default connect(mapStateToProps)(CommentList)
