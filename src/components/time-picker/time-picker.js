import React, { useState, useContext } from 'react';

import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';

import {
  useParams,
  withRouter
} from "react-router-dom";
import RoomsServiceContext from '../rooms-service-context';

import './time-picker.css';

const TimePicker = ({name, history, selectRoom}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [title, setTitle] = useState('ивент');
  const roomsServices = useContext(RoomsServiceContext);

  let { id } = useParams();

  const btnHandler = () => {
    const newReservedTime = {
      title,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      userName: name
    }

    const newItem = {
      roomId: id,
      reservedTime: newReservedTime
    }
    const newSelectRoom = {
      ...selectRoom,
      reservedTime: [
        ...selectRoom.reservedTime,
        newReservedTime
      ]
    }
    
    console.log(newSelectRoom)

    roomsServices.postRoomsQueue(newItem).then(() => {
      history.goBack();
    });

  }

  return (
    <div>
      <h2>Резервирование времени</h2>
      <div className="form-group">
        <label>Время начала</label>
        <div>
          <DatePicker 
            className="form-control"
            selected={startDate}
            onChange={date => setStartDate(date)}
            locale={ru}
            showTimeSelect
            timeIntervals={30}
            placeholderText="Начало ивента"
            dateFormat="d.MM.yyyy H:mm"
          />
        </div>
      </div>
      <div className="form-group">
        <label>Время окончания</label>
        <div>
          <DatePicker
            className="form-control"
            selected={endDate}
            onChange={date => setEndDate(date)}
            locale={ru}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            placeholderText="Конец ивента"
            dateFormat="H:mm"
            />
        </div>
      </div>
      <div className="form-group">
        <label>Название мероприятия</label>
        <input 
        className="form-control"
        type="text"
        onChange={(e) => setTitle(e.target.value) }
        value={title}/> 
      </div>
      <button className="btn btn-success" onClick={btnHandler}>
        Подтвердить
      </button>
    </div>
  )
}

const mapStateToProps = ({ userReducer: { name, selectRoom }}) => {
  return { name, selectRoom }
}


export default withRouter(connect(mapStateToProps)(TimePicker));