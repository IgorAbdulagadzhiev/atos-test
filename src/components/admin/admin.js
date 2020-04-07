import {connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

const Admin = ({ isAdmin, children, history }) => {

  if (isAdmin) {
    return children;
  }

  return null;
}

const mapStateToProps = ({ userReducer: { isAdmin }}) => {
  return { isAdmin }
}

export default withRouter(connect(mapStateToProps)(Admin));