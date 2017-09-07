import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class PublishedBlogs extends React.Component {

  removeBlogPost(blogPost) {
    this.props.dispatch(actions.remove_blog_post(blogPost));
  }

  editBlogStart(blogPost) {
    this.props.dispatch(actions.edit_blog_start(blogPost));
  }


  render() { 
    return (
      <div className="published-blog">
        <ul>
          {this.props.BlogList.map((blog, index) => {
            return <div key={index} className="ind-pub-blog">
              <div>
            		<p className="pub-title"><i className="fa fa-ravelry" aria-hidden="true"></i><strong> {blog[0]}</strong></p>
    		        <p className="pub-content">{blog[1]}</p>
              </div>
              <button className="published-btn" onClick={() => this.editBlogStart(blog)}>edit</button>
              <button className="published-btn" onClick={() => this.removeBlogPost(blog)}>remove</button>
            </div>;
          })}
        </ul>
      </div>
    )
  }

}



export default connect((state, props) => ({
  NewBlogPost: state.NewBlogPost,
  BlogList: state.BlogList,
  showEdit: state.showEdit,
  blogToEdit: state.blogToEdit
}))(PublishedBlogs);