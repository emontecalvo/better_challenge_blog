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
            <li><a href="javascript:void(0)">home </a></li>
            <li><a href="javascript:void(0)">about </a></li>
            <li><a href="javascript:void(0)"><u>blog</u></a></li>
            <li><a href="javascript:void(0)"> contact</a></li>
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