import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {
  RoomsListPage, 
  RoomDescriptionPage,
  LoginPage,
  } from '../pages';

import TimePicker from '../time-picker';

import RoomCreate from '../room-create';

import { logOut } from '../../actions';
import { connect } from 'react-redux';
import Auth from '../auth';
import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import UsersList from '../users-list';
import EditingForm from '../editing-form';
import Admin from '../admin';

const App = ({logOut}) => {

  return (
    <Container>
      <Auth>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" onClick={logOut} href="#">Выйти</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Главная</Link>
          </li>
          <Admin>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Пользователи</Link>
            </li>
          </Admin>

        </ul>
        <Switch>
          <Route path="/" component={RoomsListPage} exact/>
          <Route path="/room-details/:id" exact>
            <RoomDescriptionPage  />
          </Route>
          <Route path="/room-details/:id/reservation" >
            <TimePicker />
          </Route>
          <Route path="/login" component={LoginPage}/>
          <Route path="/room-details/:id/editing">
            <EditingForm />
          </Route>
          <Route path="/create">
            <RoomCreate />
          </Route>
          <Route path="/users" >
            <UsersList />
          </Route>
        </Switch>
      </Auth>
    </Container>
  )
}

const MapDispatchToProps = {
  logOut
}

export default connect(null, MapDispatchToProps)(App);