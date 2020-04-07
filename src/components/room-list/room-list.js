import React, {useState, useEffect, useContext } from 'react';
import RoomListItem from '../room-list-item';
import { Link } from 'react-router-dom';
import RoomsServiceContext from '../rooms-service-context';

const RoomList = () => {
  const [ rooms, setRooms] = useState([]);
  const roomsService = useContext(RoomsServiceContext);

  useEffect(() => {
    roomsService.getRooms().then((data) => {
      setRooms(data)
    })
  },[ roomsService ]);

  return (
    <> 
      <h2>Список комнат</h2>
      <div className="list-group">
        {
          rooms.map((room) => {
            return (
                <Link 
                className="list-group-item list-group-item-action" 
                to={`room-details/${room.id}`} 
                key={room.id}>
                  <RoomListItem room={room} />
                </Link>
            )
          })
        }
      </div>
    </>
  );
};

export default (RoomList);