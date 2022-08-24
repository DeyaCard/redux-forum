import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPostForm(props){
  const { post } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({
      userName: event.target.userName.value,
      votes: post.votes, 
      title: event.target.title.value,
      content: event.target.content.value,
      id: post.id,
      post: post.timeOpen
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Update Post" />
    </React.Fragment>
  );
}

EditPostForm.propTypes = {
  post: PropTypes.object,
  onEditPost: PropTypes.func
};

export default EditPostForm;