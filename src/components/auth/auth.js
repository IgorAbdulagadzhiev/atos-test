import React from 'react';
import { LoginPage } from '../pages';

import {connect } from 'react-redux';

const Auth = ({isLogIn, children}) => {

  if (isLogIn) {
    return children;
  }

  return <LoginPage />

}

const mapStateToProps = ({ userReducer: { isLogIn }}) => {
  return { isLogIn }
}

export default connect(mapStateToProps)(Auth);