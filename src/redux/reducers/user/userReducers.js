 // userReducer.js
const initialState = {
  creationLoading: false,
  creationSuccess: false,
  creationError: null,
  users: [], // Initialize an empty array to store users
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER_SUCCESS':
      return {
        ...state,
        creationLoading: false,
        creationSuccess: true,
        creationError: null,
      };
    case 'CREATE_USER_FAILURE':
      return {
        ...state,
        creationLoading: false,
        creationSuccess: false,
        creationError: action.payload,
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
