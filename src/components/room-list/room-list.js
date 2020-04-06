import React from 'react';
import RoomListItem from '../room-list-item';
import { connect } from 'react-redux';
import { roomsLoaded } from '../../actions';
import { ListGroup } from 'react-bootstrap';
import { useRoomsLoaded } from '../../hooks';
import { Link } from 'react-router-dom';

const RoomList = ({ rooms, roomsLoaded, loading,}) => {
  useRoomsLoaded(roomsLoaded);

  if (loading) {
    return <div>loading</div>
  }

  return (
    <ListGroup as="ul">
      {
        rooms.map((room) => {
          return (
          <Link to={`room-details/${room.id}`} key={room.id}>
            <ListGroup.Item action as="li">
              <RoomListItem room={room} />
            </ListGroup.Item>
          </Link>
          )
        })
      }
    </ListGroup>
  );
};

const mapStateToProps = ({ userReducer: { rooms, loading }}) => {
  return { rooms, loading,};
};

const MapDispatchToProps = {
  roomsLoaded
}

export default connect(mapStateToProps, MapDispatchToProps)(RoomList);