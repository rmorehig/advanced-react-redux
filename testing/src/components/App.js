import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import * as actions from 'actions'

const App = props => {
  const signIn = () => {
    props.changeAuth(true)
  }
  const signOut = () => {
    props.changeAuth(false)
  }
  const renderButton = () => {
    if (props.auth) {
      return <button onClick={signOut}>Sign Out</button>
    }
    return <button onClick={signIn}>Sign In</button>
  }
  const renderHeader = () => (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post a comment</Link>
      </li>
      <li>{renderButton()}</li>
    </ul>
  )

  return (
    <div>
      {renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, actions)(App)
