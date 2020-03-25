import {
  ROOMS_LOADED
} from '../actionTypes';

const roomsLoaded = (newRooms) => {
  return {
    type: ROOMS_LOADED,
    payload: newRooms
  };
};

export {
  roomsLoaded
};