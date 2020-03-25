const initialState = {
  rooms: []
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ROOMS_LOADED':
      return {
        rooms: action.payload
      };
    default:
      return state;
  }
};

export default reducer;