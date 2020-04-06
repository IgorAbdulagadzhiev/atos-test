import React, { useContext, useEffect, useState } from 'react';

import ReservationTime from '../reservation-time';
import RoomDetails from '../room-details';
import { connect } from 'react-redux';
import { selectRoom } from '../../actions';

import {
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import RoomsServiceContext from '../rooms-service-context';

const RoomDetailsContainer = ({selectRoom, isAdmin}) => {
  const roomsService = useContext(RoomsServiceContext);
  const [room, setRoom] = useState(null);

  let { id } = useParams();
  let { url } = useRouteMatch();

  useEffect(() => {
    roomsService.getRoom(id).then((room) => {
      setRoom(room);
      selectRoom(room);
    })
  }, [id, roomsService, selectRoom])

  if( !room ) {
    return null
  }

  const adminBtn = isAdmin ? <Link to={`${url}/editing`}>Редактировать</Link> : null;

  return (
    <>
      <RoomDetails room={room}/>
      <ReservationTime room={room}/>
      <div>
        <Link to={`${url}/reservation`} className="btn btn-primary">Забронировать</Link>
        {adminBtn}
      </div>
    </>
  )
}

const mapStateToProps = ({ userReducer: {isAdmin}}) => {
  return { isAdmin }
}

const mapDispatchToProps = {
  selectRoom
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomDetailsContainer);