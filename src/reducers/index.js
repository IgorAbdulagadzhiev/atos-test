const initialState = {
  rooms: [
    {
      id: 1,
      name: '1',
      seats: 10,
      projector: true,
      board: true,
      description: 'самая маленькая комната, но самая совершенная(тут есть проектор и доска)',
      reservedTime: [
        {
          startDate: new Date(2020,1,26,13,0,0),
          endDate: new Date(2020,1,26,13,30,0),
          userName: 'Петров Петр'
        },
        {
          startDate: new Date(2020,1,26,13,0,0),
          endDate: new Date(2020,1,26,13,30,0),
          userName: 'Петров Петр'
        },
        {
          startDate: new Date(2020,1,26,13,0,0),
          endDate: new Date(2020,1,26,13,30,0),
          userName: 'Петров Петр'
        },
      ]
    },
  ],
  loading: false,
  error: false,
  isLogIn: false,
  isAdmin: true,
  name: '',
  selectRoom: null,
  users: [
    {
      id: 1,
      name: 'Вася Петров',
      login: 'user',
      password: '12345',
      admin: false,
    },
    {
      id: 21,
      name: 'Вася Васин',
      login: 'admin',
      password: '12345',
      admin: true
    }
  ]
};

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_ROOMS_REQUEST':
      return {
        ...state,
        rooms: [],
        loading: true,
        error: null
      }
    case 'FETCH_ROOMS_SUCCESS':
      return {
        ...state,
        rooms: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_ROOMS_FAILURE':
      return {
        ...state,
        rooms: [],
        loading: false,
        error: action.payload
      }
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