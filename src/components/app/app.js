import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {
  ReservationPage, 
  RoomsListPage, 
  RoomDescriptionPage,
  LoginPage,
  AdminEditingPage,
  AdminRoleManagmentPage} from '../pages';

import TimePicker from '../time-picker';

import RoomCreate from '../room-create';

import { logOut } from '../../actions';
import { connect } from 'react-redux';
import Auth from '../auth';
import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import UsersList from '../users-list';

const App = ({logOut}) => {

  return (
    <Container>
      <Auth>
        <button onClick={logOut}>Выйти</button>
        <Link to="/">НА ГЛАВНУЮ</Link>
        <Link to="/users">Пользователи</Link>
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
            <AdminEditingPage />
          </Route>
          <Route path="/create">
            <RoomCreate />
          </Route>
          <Route path="/users" >
            <UsersList />
          </Route>
        </Switch>
      </Auth>
      {/* <RoomsQueue /> */}
    </Container>
  )
}

const MapDispatchToProps = {
  logOut
}

export default connect(null, MapDispatchToProps)(App);