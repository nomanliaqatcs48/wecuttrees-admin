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
    case 'DELETE_USER_SUCCESS':
      // Filter out the deleted user by comparing user IDs
      const deletedUsers = state.users.filter((user) => user.id !== action.payload);
      return {
        ...state,
        users: deletedUsers,
      };
      case 'EDIT_USER_SUCCESS':
        // Find the index of the edited user in the users array
        const editedUserIndex = state.users.findIndex(
          (user) => user._id === action.payload._id
        );
  
        // Create a new array with the edited user
        const updatedUsers = [...state.users];
        updatedUsers[editedUserIndex] = action.payload;
  
        return {
          ...state,
          users: updatedUsers,
          loading: false,
          error: null,
        };
      case 'EDIT_USER_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    default:
      return state;
  }
};

