// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import EditPostForm from './EditPostForm';
import PostDetail from './PostDetail';

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
          title: "House of the Dragon Review: Domesticating ‘Game of Thrones’",
          content: "HBO’s long-awaited prequel series has the swords and the dragon flame, the Hand and the Iron Throne. But something’s missing.",
          id: 1
        },
        {
          userName: "Person McHuman",
          votes: 7,
          title: "Westworld: Season 4 REVIEW – A Polished But Empty Copy",
          content: "A disappointing season that gets lost in its own maze and leaves fans wanting.",
          id: 2
        }
      ]
    }
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      })
    } else {
      this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
      }))
    }
  }

  handleAddingPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({
      mainPostList: newMainPostList,
      formVisibleOnPage: false
    })
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.mainPostList.filter(
      (post) => post.id === id
    )[0];
    this.setState({selectedPost: selectedPost})
  }

  handleEditClick = () => {
    this.setState({ editing: true});
  };

  handleEditingPostInList = (postToEdit) => {
    const editedMainPostList = this.state.mainPostList.filter(
      (post) => post.id !== this.state.selectedPost.id) 
      .concat(postToEdit);
    this.setState({
      mainPostList: editedMainPostList,
      editing: false,
      selectedPost: null,
    })
  }

  handleDeletingPost = (id) => {
    const newMainPostList = this.state.mainPostList.filter(
      (post) => post.id !== id
    )
    this.setState({
      mainPostList: newMainPostList,
      selectedPost: null
    })
  }

  handleUpVote = (id) => {
    const selectedPost = this.state.mainPostList.filter((post) => post.id === id)[0]
    selectedPost.votes += 1;
    const editedMainPostList = this.state.mainPostList.filter(
      (post) => post.id !== id).concat(selectedPost);
    this.setState({
      mainPostList: editedMainPostList,
      editing: false,
      selectedPost: null,
    })    
  }

  handleDownVote = (id) => {
    const selectedPost = this.state.mainPostList.filter((post) => post.id === id)[0]
    selectedPost.votes -= 1;
    const editedMainPostList = this.state.mainPostList.filter(
      (post) => post.id != id).concat(selectedPost);
    this.setState({
      mainPostList: editedMainPostList,
      editing: false,
      selectedPost: null,
    })    
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = (
        <EditPostForm 
          post={this.state.selectedPost}
          onEditPost={this.handleEditingPostInList}
        />
      )
      buttonText= "View Post List"
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = (
        <PostDetail 
          post={this.state.selectedPost}
          onClickingDelete={this.handleDeletingPost}
          onClickingEdit={this.handleEditClick}
          onUpVote={this.handleUpVote}
          onDownVote={this.handleDownVote}
        />
      )
      buttonText= "View Post List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewPostForm 
          onNewPostCreation={this.handleAddingPostToList}
        />
      )
      buttonText= "View Post List"
    } else{
      currentlyVisibleState = (
        <PostList
          postList={this.state.mainPostList.sort((a, b) => b.votes - a.votes)} 
          onPostSelection={this.handleChangingSelectedPost} />
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