import React, { useContext } from 'react';

import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLogIn} from '../../actions';
import RoomsServiceContext from '../rooms-service-context';

const LoginForm = ({ handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Login</label>
        <Field className="form-control" component={'input'} name='login'/>
      </div>
      <div className="form-group"> 
        <label>Password</label>
        <Field className="form-control" name='password' component={'input'} />
      </div>
      <button className="btn btn-primary">войти</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login',
  destroyOnUnmount: false
})(LoginForm)

const LoginPage = ({history, isLogIn}) => {
  const roomsServices = useContext(RoomsServiceContext);

  const onSubmit = (data) => {

    roomsServices.getUsers().then((users) => {
      const user = users.find((item) => {
        return item.login === data.login
      })
      if(user|| user.password === data.password) {
        isLogIn(user);
      }
    })
    history.push(`/`);
  }
  return <LoginReduxForm onSubmit={onSubmit}/>
};


const mapDispatchToProps = {
  isLogIn
}

export default withRouter(connect(null, mapDispatchToProps)(LoginPage));