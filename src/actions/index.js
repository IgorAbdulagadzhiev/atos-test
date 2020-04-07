
const roomsLoaded = (newRooms) => {
  return {
    type: "FETCH_ROOMS_SUCCESS",
    payload: newRooms
  };
};

const roomsError = (error) => {
  return {
    type: "FETCH_ROOMS_FAILURE",
    payload: error
  };
};

const roomsRequested = () => {
  return {
    type: 'FETCH_ROOMS_REQUEST'
  }
}

const selectRoom = (newRoom) => {
  return {
    type: 'SELECT_ROOM',
    payload: newRoom,
  }
}

const isLogIn = (user) => {
  return {
    type: 'LOGIN',
    payload: user
  }
}

const logOut = () => {
  return {
    type: "LOGOUT"
  }
}

export {
  roomsLoaded,
  roomsError,
  roomsRequested,
  selectRoom,
  isLogIn,
  logOut
};