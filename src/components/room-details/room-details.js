import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const RoomDetails = ({ room }) => {
  const { name, seats, projector, board, description} = room;

  const getIcon = (bool, icon) => {
    return bool ? 
    <FontAwesomeIcon icon={icon} size="lg"> 
    </FontAwesomeIcon> : null;
  }

  const projectorIcon = getIcon(projector, faCheck);
  const boardIcon = getIcon(board, faCheck);

  return (
    <>
    <h2 className="text-center">{name}</h2>
    <p>{`в комнате ${seats} мест`}</p>
    <table className="table table-bordered" >
      <tbody>
        <tr>
          <td style={{ minWidth: 50, }}>{projectorIcon}</td>
          <td className="w-100">проектор</td>
        </tr>
        <tr>
          <td style={{ minWidth: 50, }}>{boardIcon}</td>
          <td className="w-100">доска</td>
        </tr>
      </tbody>
    </table>
    <p>{description}</p>
    </>
  )
}

export default (RoomDetails);