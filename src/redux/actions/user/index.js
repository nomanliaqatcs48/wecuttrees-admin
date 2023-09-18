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
      const response = await axios.get('/api/users/users-list'); // Adjust the API endpoint as needed
      // If fetching users is successful, dispatch a success action
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data.users });
    } catch (error) {
      // If fetching users fails, dispatch a failure action
      dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.response.data });
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      // Send a DELETE request to your user deletion API endpoint
      await axios.post(`/api/users/delete`, {userId: userId.toString()}); // Adjust the API endpoint as needed

      // If user deletion is successful, dispatch a success action
      dispatch({ type: 'DELETE_USER_SUCCESS', payload: userId });
    } catch (error) {
      // If user deletion fails, dispatch a failure action
      dispatch({ type: 'DELETE_USER_FAILURE', payload: error.response.data });
    }
  };
};