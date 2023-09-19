// dealReducer.js
const initialState = {
  onCreateAdminLoading: false,
  creationError: null,
  isLoading: false,
  list: [],
  error: null,
  onDeleteAdminLoading: false,
};

export const dealReducers = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_DEAL":
      return {
        ...state,
        onCreateAdminLoading: true,
      };
    case "CREATE_DEAL_FAILURE":
      return {
        ...state,
        onCreateAdminLoading: false,
        creationError: null,
      };
    case "CREATE_DEAL_FAILURE":
      return {
        ...state,
        onCreateAdminLoading: false,
        creationError: action.payload,
      };

    case "FETCH_DEALS":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_DEALS_SUCCESS":
      return {
        ...state,
        list: action.payload,
        isLoading: false,
        error: null,
      };
    case "FETCH_DEALS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case "UPDATE_DEAL":
      return {
        ...state,
        onCreateAdminLoading: true,
      };

    case "UPDATE_DEAL_SUCCESS":
      return {
        ...state,
        onCreateAdminLoading: false,
        creationError: null,
      };
    case "UPDATE_DEAL_FAILURE":
      return {
        ...state,
        onCreateAdminLoading: false,
        creationError: action.payload,
      };

    case "DELETE_DEAL":
      return {
        ...state,
        onDeleteAdminLoading: true,
      };

    case "DELETE_DEAL_SUCCESS":
      return {
        ...state,
        onDeleteAdminLoading: false,
        creationError: null,
      };
    case "DELETE_DEAL_FAILURE":
      return {
        ...state,
        onDeleteAdminLoading: false,
        creationError: action.payload,
      };

    default:
      return state;
  }
};
