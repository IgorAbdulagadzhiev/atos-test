import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faChalkboard } from '@fortawesome/free-solid-svg-icons';
import { formatTime, formatDate} from '../../utils/formatDate';

const RoomListItem = ({room}) => {
  const { name, seats, projector, board, reservedTime } = room;

  let earlyDateString;
  
  if(reservedTime.length === 0 ) {
    earlyDateString = 'свободная комната';
  } else {
    const earlyDate = reservedTime.reduce((prev, item) => {
      return prev.startDate < item.startDate ? prev : item;
    })
    earlyDateString = `${formatDate(earlyDate.startDate)} ${formatTime(earlyDate.startDate)} - ${formatTime(earlyDate.endDate)}`
  }

  const getIcon = (bool, icon) => {
    return bool ? 
    <FontAwesomeIcon className="ml-3" icon={icon} size="lg"> 
    </FontAwesomeIcon> : null;
  }

  const projectorIcon = getIcon(projector, faCamera);
  const boardIcon = getIcon(board, faChalkboard);

  return (
    <>
      <div className="row">
        <div className="col d-flex flex-column">
          <span>{`${name}`}</span>
          <span>{`мест ${seats}`}</span>
          <span>{earlyDateString}</span>
        </div>
        <div className="col d-flex justify-content-end align-items-center">
            {projectorIcon}
            {boardIcon}
        </div>
      </div>
    </>
  );
};

export default RoomListItem;