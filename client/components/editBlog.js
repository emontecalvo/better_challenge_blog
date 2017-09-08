import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';



class EditBlog extends React.Component {

  constructor(props) {
    super(props);
  }

  editBlogPost(blogToEdit) {
    this.props.dispatch(actions.edit_the_blog(blogToEdit));
  }

  cancelEdit() {
    this.props.dispatch(actions.cancel_edit());
  }

  render() {
    return(
          <div className="new-blog-form">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              let title = e.target.title.value
              let content = e.target.content.value
              this.props.blogToEdit[0] = title
              this.props.blogToEdit[1] = content
              this.editBlogPost(this.props.blogToEdit)

            }}
          >

          <div className="blog-title-form"><input type="text" name="title" defaultValue={this.props.blogToEdit[0]}/></div>
          <div className="blog-content-form"><textarea rows="10" name="content" defaultValue={this.props.blogToEdit[1]}/></div>
          <button type="submit">
            save
          </button>

  </form>
      <button onClick={() => this.cancelEdit()}>cancel</button>
      </div>
    )
  }
}


export default connect((state, props) => ({
  NewBlogPost: state.NewBlogPost,
  BlogList: state.BlogList,
  showEdit: state.showEdit,
  blogToEdit: state.blogToEdit
}))(EditBlog);