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
  selectRoom,
  isLogIn,
  logOut
};