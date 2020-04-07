import React from 'react';

import { formatTime, formatDate} from '../../utils/formatDate';

const ReservationTime = ({ room }) => {
  const { reservedTime } = room;

  return (
    <>
      <h2>Зарезервированное время</h2>
      <table className="table">
      <tbody>
      {
        reservedTime.map(({startDate, endDate, userName}) => {
          const DateStr = formatDate(startDate);
          const startTimeStr = formatTime(startDate);
          const endTimeStr = formatTime(endDate)
          return (
            <tr key={+new Date(startDate)}>
              <td>{DateStr}</td>
              <td>{`${startTimeStr} - ${endTimeStr}`}</td>
              <td>{userName}</td>
            </tr>
          )
        })
      }
      </tbody>
      </table>
    </>
  )
}

export default ReservationTime;