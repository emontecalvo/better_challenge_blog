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
        <div className="blog-container">
          <div className="create-btn"><button onClick={() => this.startNewBlog()}>create</button></div>
          <PublishedBlogs />
        </div>
      )
    } else {
      return (
        <div>
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