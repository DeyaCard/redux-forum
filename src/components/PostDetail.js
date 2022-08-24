import React from 'react'
import PropTypes from 'prop-types'
import thumbsUp from "./../img/up.png"
import thumbsDown from "./../img/down.png"

function PostDetail(props) {
  const { post, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1> Post Detail </h1>
      <h3>{post.userName}</h3>
      <h3> Votes: {post.votes}</h3>
      
      <p><em>{post.title}</em></p>
      <p><em>{post.content}</em></p>

      <button onClick={() => props.onUpVote(post.id)}><img src={thumbsUp} alt="An image of a thumbs up"/></button>
      <button onClick={() => props.onDownVote(post.id)}><img src={thumbsDown} alt="An image of a thumbs down"/></button>
        <br/>
        <br/>
      <button onClick={ props.onClickingEdit}>Update Post</button>
      <button onClick={() => onClickingDelete(post.id) }>Delete</button>
      
      <hr/>
    </React.Fragment>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default PostDetail