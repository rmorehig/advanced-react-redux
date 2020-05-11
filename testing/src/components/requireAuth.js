import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

export default Component => {
  const ComposedComponent = props => {
    const { auth } = props
    const history = useHistory()

    useEffect(() => {
      if (!auth) {
        history.push('/')
      }
    }, [auth])
    return <Component {...props} />
  }
  const mapStateToProps = state => {
    return {
      auth: state.auth,
    }
  }
  return connect(mapStateToProps)(ComposedComponent)
}
