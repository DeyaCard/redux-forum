// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import PostList from './PostList';
import NewPostForm from './NewPostForm';

class PostControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      editing: false,
      selectedPost: null,
      mainPostList: [
        {
          userName: "Joan Jett",
          votes: 4,
          title: "Post Title",
          content: "jl;aak asjshf shfosh sshgl spsk jjjjjjjjjj aahagufhhhhh ajf, aoafhhhh iaifhfk."
        },
        {
          userName: "Person McHuman",
          votes: 7,
          title: "Other Post Title",
          content: "jl;aak asjshf shfosh sshgl spsk jjjjjjjjjj aahagufhhhhh ajf, aoafhhhh iaifhfk."
        },
      ]
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }))
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewPostForm 
        />
      )
      buttonText= "View Post List"
    } else{
      currentlyVisibleState = (
        <PostList
          postList={this.state.mainPostList} />
      )
      buttonText = "Add New Post"
    }


    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}



export default PostControl;