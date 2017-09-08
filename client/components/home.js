import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

import BlogContainer from './blogContainer';
import EditBlog from './editBlog';
import Header from './header';


class Home extends React.Component {

  render() {
    if (this.props.showEdit) {
      return (
        <div>
          <Header />
          <EditBlog />
        </div>
        )
      } else {
        return (
          <div>
            <Header />
            <BlogContainer />
          </div>
        )
      }
    }
  }


export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,
  showHome: state.showHome,
  NewBlogPost: state.NewBlogPost,
  BlogList: state.BlogList,
  showEdit: state.showEdit,
  blogToEdit: state.blogToEdit
}))(Home);