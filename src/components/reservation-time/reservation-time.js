import React from 'react';

import { Table } from 'react-bootstrap';
import { formatTime, formatDate} from '../../utils/formatDate';

const ReservationTime = ({ room }) => {
  const { reservedTime } = room;

  return (
    <>
      <h2>Зарезервированное время</h2>
      <Table>
      <tbody>
      {
        reservedTime.map(({startDate, endDate, userName}) => {
          const DateStr = formatDate(startDate);
          const startTimeStr = formatTime(startDate);
          const endTimeStr = formatTime(endDate)
          return (
            <tr>
              <td>{DateStr}</td>
              <td>{`${startTimeStr} - ${endTimeStr}`}</td>
              <td>{userName}</td>
            </tr>
          )
        })
      }
      </tbody>
      </Table>
    </>
  )
}

export default ReservationTime;