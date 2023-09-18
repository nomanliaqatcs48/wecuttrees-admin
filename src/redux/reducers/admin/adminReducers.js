// userReducer.js
const initialState = {
  onCreateAdminLoading: false,
  creationError: null,
  isLoading: false,
  list: [],
  error: null,
  onDeleteAdminLoading: false,
};

export const adminReducers = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_ADMIN":
      return {
        ...state,
        onCreateAdminLoading: true,
      };
    case "CREATE_ADMIN_SUCCESS":
      return {
        ...state,
        onCreateAdminLoading: false,
        creationError: null,
      };
    case "CREATE_ADMIN_FAILURE":
      return {
        ...state,
        onCreateAdminLoading: false,
        creationError: action.payload,
      };

    case "FETCH_ADMINS":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_ADMINS_SUCCESS":
      return {
        ...state,
        list: action.payload,
        isLoading: false,
        error: null,
      };
    case "FETCH_ADMINS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case "UPDATE_ADMIN":
      return {
        ...state,
        onCreateAdminLoading: true,
      };

    case "UPDATE_ADMIN_SUCCESS":
      return {
        ...state,
        onCreateAdminLoading: false,
        creationError: null,
      };
    case "UPDATE_ADMIN_FAILURE":
      return {
        ...state,
        onCreateAdminLoading: false,
        creationError: action.payload,
      };

    case "DELETE_ADMIN":
      return {
        ...state,
        onDeleteAdminLoading: true,
      };

    case "DELETE_ADMIN_SUCCESS":
      return {
        ...state,
        onDeleteAdminLoading: false,
        creationError: null,
      };
    case "DELETE_ADMIN_FAILURE":
      return {
        ...state,
        onDeleteAdminLoading: false,
        creationError: action.payload,
      };

    default:
      return state;
  }
};
