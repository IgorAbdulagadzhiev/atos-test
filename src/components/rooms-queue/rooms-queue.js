import React, { useContext, useState, useEffect } from 'react';

import RoomsServiceContext from '../rooms-service-context';
import { formatDate, formatTime } from '../../utils/formatDate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const RoomsQueue = () => {
  const [queue, setQueue] = useState([]);
  const roomsServices = useContext(RoomsServiceContext);

  const deleteItem = (id) => {
    console.log('click');
    roomsServices.deleteRoomsQueue(id).then(() => {
      roomsServices.getRoomsQueue().then((data) => {
        setQueue(data);
      });
    });
  }

  const addItem = (id, roomId, newReservedTime) => {
    console.log('additem');
    roomsServices.getRoom(roomId).then((data) => {
      const newData = {
        ...data,
        reservedTime: [
          ...data.reservedTime,
          newReservedTime
        ]
      }
    
    roomsServices.putRooms(roomId, newData).then(() => {
      roomsServices.deleteRoomsQueue(id).then(() => {
        roomsServices.getRoomsQueue().then((data) => {
          setQueue(data);
        });
      });
    });
    })
  }

  useEffect(() => {
    roomsServices.getRoomsQueue().then((data) => {
      setQueue(data);
    });
    const intervalId = setInterval(() => {
      roomsServices.getRoomsQueue().then((data) => {
        setQueue(data);
      });
    }, 2000)

    return () => clearInterval(intervalId);

  }, [roomsServices])


  return (
    <>
      <h2>Заявки</h2>
      <ul className="list-group">
        {
          queue.map((item) => {
            const str = `${formatDate(item.reservedTime.startDate)} ${formatTime(item.reservedTime.startDate)} - ${formatTime(item.reservedTime.endDate)}`
            return (
            <li 
              className="list-group-item d-flex justify-content-between"
              key={item.id}
            >
              <div>
                <span>{`номер комнаты ${item.roomId}`}</span>
                <span>{`${item.reservedTime.title}`}</span>
                <span>{str}</span>
              </div>
              <div>
                <button><FontAwesomeIcon onClick={() => addItem(item.id, item.roomId, item.reservedTime)} icon={faCheck}/></button>
                <button><FontAwesomeIcon onClick={() => deleteItem(item.id)} icon={faTimes}/></button>
              </div>
            </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default RoomsQueue;