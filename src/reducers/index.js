const initialState = {
  loading: false,
  error: false,
  isLogIn: false,
  isAdmin: true,
  name: '',
  selectRoom: null,
};

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SELECT_ROOM':
      return {
        ...state,
        selectRoom: action.payload
      }
    case 'TIME_PICKED':
      return {
        ...state,
        rooms: action.payload
      }
    case 'LOGIN':
      return {
        ...state,
        isLogIn: true,
        isAdmin: action.payload.admin,
        name: action.payload.name
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogIn: false,
        isAdmin: false,
        name: ''
      }
    default:
      return state;
  }
};

export default userReducer;