// Admin Actions
import axios from "axios";
import { toast } from "react-toastify";
import { history } from '../../../history';

export const createAdmin = (data) => {
  return async (dispatch) => {
    dispatch({ type: 'CREATE_ADMIN'});
    try {
      const response = await axios.post("/api/admin/signup", data);
      dispatch({ type: "CREATE_ADMIN_SUCCESS", payload: response.data });
      toast.success("Admin created successfully!");
      dispatch(getAdminsList());
      history.push('/admin');
    } catch (error) {
      dispatch({ type: "CREATE_ADMIN_FAILURE", payload: error.response.data });
    }
  };
};

export const getAdminsList = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_ADMINS'});
    try {
      const response = await axios.get("/api/admin/admins-list");
      dispatch({ type: "FETCH_ADMINS_SUCCESS", payload: response.data.users });
    } catch (error) {
      dispatch({ type: "FETCH_ADMINS_FAILURE", payload: error.response.data });
    }
  };
};

export const updateAdmin = (data) => {
  return async (dispatch) => {
    dispatch({ type: 'UPDATE_ADMIN'});
    try {
      const response = await axios.put("/api/admin/update-profile", data);
      dispatch({ type: "UPDATE_ADMIN_SUCCESS", payload: response.data });
      dispatch(getAdminsList());
      toast.success("Admin updated successfully!");
      history.push('/admin');
    } catch (error) {
      dispatch({ type: "UPDATE_ADMIN_FAILURE", payload: error.response.data });
    }
  };
};

export const deleteAdmin = (adminId) => {
  return async (dispatch) => {
    dispatch({ type: 'DELETE_ADMIN'});
    try {
      const response = await axios.delete(`/api/admin/delete/${adminId}`);
      dispatch({ type: "DELETE_ADMIN_SUCCESS", payload: response.data });
      dispatch(getAdminsList());
      toast.success("Admin deleted successfully!");
      history.push('/admin');
    } catch (error) {
      dispatch({ type: "DELETE_ADMIN_FAILURE", payload: error.response.data });
    }
  };
};