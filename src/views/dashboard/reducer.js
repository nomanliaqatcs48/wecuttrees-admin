// userReducer.js
const initialState = {
    creationLoading: false,
    creationSuccess: false,
    creationError: null,
  };
  
  const reducer = (state = initialState, action) => {
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
      default:
        return state;
    }
  };
  
  export default reducer;
  