import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

import NewBlogPost from './newBlogPost';

import PublishedBlogs from './PublishedBlogs';


class BlogContainer extends React.Component {

  startNewBlog() {
    this.props.dispatch(actions.start_new_blog());
  }

  render() {
    if (!this.props.BlogStart) {
      return (
        <div>
          <button onClick={() => this.startNewBlog()}>create blog post</button>
          <PublishedBlogs />
        </div>
      )
    } else {
      return (
        <div>
          <p>create a new blog post</p>
          <NewBlogPost />
        </div> 
      )
    }
  }

}

export default connect((state, props) => ({
  BlogStart: state.BlogStart,
  BlogList: state.BlogList
}))(BlogContainer);