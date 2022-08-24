import React from 'react'
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'
import { v4 } from 'uuid';

function NewPostForm(props) {

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      userName: event.target.userName.value,
      title: event.target.title.value,
      votes: 0,
      content: event.target.content.value,
      id: v4(),
      timeOpen: new Date().toDateString()
    })
  }

  return (
    <React.Fragment>
      <h1> Add Post </h1>
      <ReusableForm 
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Add Post"
      />
    </React.Fragment>
  )
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
}


export default NewPostForm
