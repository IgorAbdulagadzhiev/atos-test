import React, {useState, useEffect, useContext} from 'react';

import RoomsServiceContext from '../../rooms-service-context';


import {
  Link,
  useParams,
  withRouter
} from "react-router-dom";

const EditingForm = ({history}) => {
  const [room, setRoom] = useState(null);
  const roomsService = useContext(RoomsServiceContext);
  let { id } = useParams();

  useEffect(() => {
    roomsService.getRoom(id).then((room) => {
      setRoom(room);
      console.log(room)
    })
  }, [roomsService, id])

  if(!room) {
    return null
  }

  const inputHandler = (e) => {
    const newRoom = {
      ...room,
      [e.target.name]: e.target.value
    }
    setRoom(newRoom);
  }

  const checkboxHandler = (e) => {
    const newRoom = {
      ...room,
      [e.target.name]: !room[e.target.name]
    }
    setRoom(newRoom);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    roomsService.putRooms(id, room).then(() => {
      history.goBack();
    });
  }

  const deleteRoom = (e) => {
    e.preventDefault();
    roomsService.deleteRoom(id).then(() => {
      history.push('/');
    });
  }
  
  return (
    <form onSubmit={formSubmit}>
      <div className="form-group">
        <label>Название</label>
        <input 
        className="form-control" 
        name="name" 
        value={room.name}
        onChange={inputHandler}
        />
      </div>
      <div className="form-group">
        <label>Количество мест</label>
        <input 
        className="form-control" 
        name="seats" 
        type="number" 
        value={room.seats}
        onChange={inputHandler} />
      </div>
      <div className="form-group">
        <label>проектор</label>
        <input 
        className="form-control" 
        name="projector" 
        type="checkbox" 
        checked={room.projector}
        onChange={checkboxHandler} />
      </div>
      <div className="form-group">
        <label>доска</label>
        <input 
        className="form-control" 
        name="board" 
        type="checkbox" 
        checked={room.board}
        onChange={checkboxHandler} />
      </div>
      <div className="form-group">
        <label>описание</label>
        <input 
        className="form-control" 
        name="description" 
        type="textarea" 
        value={room.description}
        onChange={inputHandler} />
      </div>
      <button>Подтвердить</button>
      <button onClick={deleteRoom}>Удалить комнату</button>
    </form>
  );
};


const AdminEditingPage = () => {

  return <EditingForm />
}

export default withRouter(EditingForm);