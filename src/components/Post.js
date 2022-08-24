import React from 'react'
import PropTypes from 'prop-types'

function Post(props) {
  return (
    <React.Fragment>
      <div onClick = {()=> props.whenPostClicked(props.id)}>
        <h4>{props.timeOpen}</h4>
        <h3>User: {props.userName}</h3>
        <h3>Votes: {props.votes}</h3>
        <p><em>{props.title}</em></p>
      </div>
      <hr/>
    </React.Fragment>
  )
}

Post.propTypes = {
  userName: PropTypes.string,
  votes: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
};

export default Post;
