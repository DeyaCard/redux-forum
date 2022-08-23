import React from 'react'
// import PropTypes from 'prop-types'

function Post(props) {
  return (
    <React.Fragment>
      <hr/>
      <h3>{props.userName}</h3>
      <h3>{props.votes}</h3>
      <h3>{props.title}</h3>
      <h3>{props.content}</h3>
    </React.Fragment>
  )
}

Post.propTypes = {}

export default Post
