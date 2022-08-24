import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

function PostList(props) {
  return (
    <React.Fragment>
      <h1> Posts </h1>
      {props.postList.map((post) => (
        <Post 
        whenPostClicked={props.onPostSelection}
          userName={post.userName}
          title={post.title}
          votes={post.votes}
          content={post.content}
          timeOpen={post.timeOpen}
          id={post.id}
          key={post.id}
        />
      ))}
    </React.Fragment>
  )
}

PostList.propTypes = {}

export default PostList
