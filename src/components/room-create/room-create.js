import React, {useState, useContext} from 'react';

import RoomsServiceContext from '../rooms-service-context';

import {
  withRouter
} from "react-router-dom";

const RoomCreate = ({history}) => {
  const initialState = {
    name: '',
    seats: '',
    projector: false,
    board: false,
    description: '',
    reservedTime: [ ]
  }
  
  const [room, setRoom] = useState(initialState);
  const roomsService = useContext(RoomsServiceContext);

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
    console.log(room)
    roomsService.postRoom(room).then((data) => {
      history.goBack();
      console.log(data);
    });
  }

  return (
    <form onSubmit={formSubmit}>
      <div className="form-group">
        <label>Название</label>
        <input 
        className="form-control" 
        name="name" 
        onChange={inputHandler}
        required
        />
      </div>
      <div className="form-group">
        <label>Количество мест</label>
        <input 
        className="form-control" 
        name="seats" 
        type="number" 
        onChange={inputHandler}
        required />
      </div>
      <div className="form-group">
        <label>проектор</label>
        <input 
        className="form-control" 
        name="projector" 
        type="checkbox" 
        onChange={checkboxHandler} />
      </div>
      <div className="form-group">
        <label>доска</label>
        <input 
        className="form-control" 
        name="board" 
        type="checkbox" 
        onChange={checkboxHandler} />
      </div>
      <div className="form-group">
        <label>описание</label>
        <input 
        className="form-control" 
        name="description" 
        type="textarea" 
        onChange={inputHandler} />
      </div>
      <button>Подтвердить</button>
    </form>
  );
}

export default withRouter(RoomCreate);