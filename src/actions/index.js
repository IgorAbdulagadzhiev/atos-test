
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

const timePicked = (rooms, id, startDate, endDate, name) => {
  const idx = rooms.findIndex((el) => el.id == id);

  const item = rooms.find((item) => item.id == id);
  item.reservedTime = 
  [
    ...item.reservedTime,
    {startDate: startDate, endDate:endDate, userName: name}]

  const newRooms = [
    ...rooms.slice(0, idx),
    item,
    ...rooms.slice(idx + 1)
  ]
  return {
    type: 'TIME_PICKED',
    payload: newRooms
  }
}

export {
  roomsLoaded,
  roomsError,
  roomsRequested,
  selectRoom,
  timePicked,
  isLogIn,
  logOut
};