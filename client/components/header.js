import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';



class Header extends React.Component {


  render() {
    return (
      <div className="header">
        <div className="header-links">
          <img src="./zen-logo.png" />
          <ul>
            <li>home </li>
            <li>about </li>
            <li><u>blog</u> </li>
            <li>contact</li>
          </ul>
        </div>
        <div className="banner-img">
          <img src="./zen2.png" />
        </div>
      </div>
    )

  }

}

export default connect((state, props) => ({
  BlogList: state.BlogList
}))(Header);