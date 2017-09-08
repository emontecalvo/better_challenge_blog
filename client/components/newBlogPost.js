import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';



class NewBlogPost extends React.Component {

  addBlog(title, content) {
    this.props.dispatch(actions.add_blog(title, content));
  }

  cancelBlog() {
    this.props.dispatch(actions.cancel_blog());
  }

  render() {
    return (
      <div className="new-blog-form">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            let title = e.target.title.value
            let content = e.target.content.value
            this.addBlog(title, content)
            e.target.title.value = ''
            e.target.content.value = ''
          }}
        >

        <div className="blog-title-form"><input type="text" placeholder="title" name="title" /></div>
        <div className="blog-content-form"><textarea rows="10" placeholder="Cupcake ipsum dolor. Sit amet sesame snaps lemon drops jujubes lollipop jujubes. Dragée cookie muffin jelly beans." name="content" /></div>

      <button type="submit"><i className="fa fa-ravelry" aria-hidden="true"></i>
        publish
      </button>
    </form>
    <button onClick={() => this.cancelBlog()}><i className="fa fa-angle-left" aria-hidden="true"></i>back</button>
    </div>
    )

  }

}

export default connect((state, props) => ({
  NewBlogPost: state.NewBlogPost,
  BlogList: state.BlogList
}))(NewBlogPost);