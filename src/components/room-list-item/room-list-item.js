import React from 'react';

import { Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faChalkboard } from '@fortawesome/free-solid-svg-icons';
import { formatTime, formatDate} from '../../utils/formatDate';

const RoomListItem = ({room}) => {
  const { name, seats, projector, board, reservedTime } = room;

  let earlyDateString;
  
  if(reservedTime.length == 0 ) {
    earlyDateString = 'free room';
  } else {
    const earlyDate = reservedTime.reduce((prev, item) => {
      return prev.startDate < item.startDate ? prev : item;
    })
    earlyDateString = `${formatDate(earlyDate.startDate)} ${formatTime(earlyDate.startDate)} - ${formatTime(earlyDate.endDate)}`
  }

  const getIcon = (bool, icon) => {
    return bool ? 
    <FontAwesomeIcon icon={icon} size="lg"> 
    </FontAwesomeIcon> : null;
  }

  const projectorIcon = getIcon(projector, faCamera);
  const boardIcon = getIcon(board, faChalkboard);

  return (
    <>
      <Row>
        <Col className="d-flex flex-column">
          <span>{`комната ${name}`}</span>
          <span>{`мест ${seats}`}</span>
          <span>{earlyDateString}</span>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <span>
            {projectorIcon}
          </span>
          <span>
            {boardIcon}
          </span>
        </Col>
      </Row>
    </>
  );
};

export default RoomListItem;