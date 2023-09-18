// userActions.js
import axios from 'axios';

export const createUser = (userData) => {
  return async (dispatch) => {
    try {
      // Send a POST request to your user creation API endpoint
      const response = await axios.post('/api/users/signup', userData);

      // If user creation is successful, dispatch a success action
      dispatch({ type: 'CREATE_USER_SUCCESS', payload: response.data });
    } catch (error) {
      // If user creation fails, dispatch a failure action
      dispatch({ type: 'CREATE_USER_FAILURE', payload: error.response.data });
    }
  };
};

export const fetchAllUsers = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('accessToken'); // Retrieve the token from local storage
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
debugger
      const response = await axios.get('/api/users/users-list', config); // Adjust the API endpoint as needed

      // If fetching users is successful, dispatch a success action
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
    } catch (error) {
      // If fetching users fails, dispatch a failure action
      dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.response.data });
    }
  };
};
