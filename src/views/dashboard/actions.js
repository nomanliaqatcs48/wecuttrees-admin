// userActions.js
import axios from 'axios';

export const createUser = (userData) => {
  return async (dispatch) => {
    try {
        debugger
      // Send a POST request to your user creation API endpoint
      const response = await axios.post('https://api-cryptodeals.invo.zone/api/users/signup', userData);

      // If user creation is successful, dispatch a success action
      dispatch({ type: 'CREATE_USER_SUCCESS', payload: response.data });
    } catch (error) {
      // If user creation fails, dispatch a failure action
      dispatch({ type: 'CREATE_USER_FAILURE', payload: error.response.data });
    }
  };
};
