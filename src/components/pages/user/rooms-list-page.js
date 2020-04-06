import React from 'react';
import RoomList from '../../room-list';
import RoomsQueue from '../../rooms-queue';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const RoomsListPage = ({isAdmin}) => {
  const roomsQ = isAdmin ? 
  <div>
    <RoomsQueue/>
    <Link to="/create">Добавить комнату</Link>
  </div> :
  null;

  return (
    <>
      <RoomList />
      { roomsQ }
    </>
  );
};

const mapStateToProps = ({userReducer : {isAdmin}}) => {
  return { isAdmin }
}

export default connect(mapStateToProps)(RoomsListPage);