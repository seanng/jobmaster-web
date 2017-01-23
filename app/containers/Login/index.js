/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectLogin from './selectors';

import { login } from './actions';

let comp = {
  email: '',
  password: ''
}

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  setEmail(e) {
    comp.email = e.target.value;
  }

  setPassword(e) {
    comp.password = e.target.value;
  }

  render() {
    return (
      <div>
        <form id="signin" onSubmit={this.props.onSubmitForm}>
          <input type="text" name="email" placeholder="email" onChange={this.setEmail.bind(this)} />
          <input type="password" name="password" placeholder="password" onChange={this.setPassword.bind(this)}/>
          <input type="submit" name="Sign in" className="btn btn-default" />
        </form>
      </div>
    );
  }
}

Login.propTypes = {

};

const mapStateToProps = createStructuredSelector({
  Login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(login(comp.email, comp.password));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
