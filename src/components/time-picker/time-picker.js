import React, { useState, useContext } from 'react';

import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { timePicked, roomsLoaded } from '../../actions';

import {
  useParams,
  withRouter
} from "react-router-dom";
import RoomsServiceContext from '../rooms-service-context';

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
      <div>
        <DatePicker 
          selected={startDate}
          onChange={date => setStartDate(date)}
          locale={ru}
          showTimeSelect
          timeIntervals={30}
          placeholderText="Начало ивента"
          dateFormat="d.MM.yyyy H:mm"
        />
      </div>
      <div>
        <DatePicker 
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
      <div>
        <input 
        type="text"
        onChange={(e) => setTitle(e.target.value) }
        value={title}/> 
      </div>
      <Button onClick={btnHandler}>
        Подтвердить
      </Button>
    </div>
  )
}

const mapStateToProps = ({ userReducer: { rooms, name, selectRoom }}) => {
  return { rooms, name, selectRoom }
}

const mapDispatchToProps = {
  timePicked, roomsLoaded
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimePicker));