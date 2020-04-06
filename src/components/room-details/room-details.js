import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
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
    <h2 className="text-center">{ `комната ${name}`}</h2>
    <span>{`в комнате ${seats} мест`}</span>
    <Table bordered>
      <tbody>
        <tr>
          <td>{projectorIcon}</td>
          <td className="w-100">проектор</td>
        </tr>
        <tr>
          <td>{boardIcon}</td>
          <td className="w-100">доска</td>
        </tr>
      </tbody>
    </Table>
    <p>{description}</p>
    </>
  )
}

const MapStateToProps = ({ userReducer: { rooms }}) => {
  return { rooms };
};

export default connect(MapStateToProps)(RoomDetails);