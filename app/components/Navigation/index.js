/**
*
* Navigation
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import messages from './messages';

class Navigation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed btn-info" data-toggle="collapse" data-target="#navbar-collapse">
              <span className="sr-only">Toggle Navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              GoGenie
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <Link className="nav-link" to="/myposts">
                  <FormattedMessage {...messages.myPosts} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/chats">
                  <FormattedMessage {...messages.chats} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/help">
                  <FormattedMessage {...messages.help} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/account">
                  <FormattedMessage {...messages.account} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )

  }
}

Navigation.propTypes = {

};

export default Navigation;
