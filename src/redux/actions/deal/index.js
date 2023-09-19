// Deal Actions
import axios from "axios";
import { toast } from "react-toastify";
import { history } from '../../../history';

export const createDeal = (data) => {
  return async (dispatch) => {
    dispatch({ type: 'CREATE_DEAL'});
    try {
      const response = await axios.post("/api/deals/create", data);
      dispatch({ type: "CREATE_DEAL_SUCCESS", payload: response.data });
      toast.success("Deal created successfully!");
      dispatch(getDealsList());
      history.push('/admin/deals');
    } catch (error) {
      dispatch({ type: "CREATE_DEAL_FAILURE", payload: error.response.data });
    }
  };
};

export const getDealsList = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DEALS'});
    try {
      const response = await axios.get("/api/deals/list");
      dispatch({ type: "FETCH_DEALS_SUCCESS", payload: response.data.deals });
    } catch (error) {
      dispatch({ type: "FETCH_DEALS_FAILURE", payload: error.response.data });
    }
  };
};

export const updateDeal = (data) => {
  return async (dispatch) => {
    dispatch({ type: 'UPDATE_DEAL'});
    try {
      const response = await axios.post("/api/deals/update", data);
      dispatch({ type: "UPDATE_DEAL_SUCCESS", payload: response.data });
      dispatch(getDealsList());
      toast.success("Deal updated successfully!");
      history.push('/admin/deals');
    } catch (error) {
      dispatch({ type: "UPDATE_DEAL_FAILURE", payload: error.response.data });
    }
  };
};

export const deleteDeal = (dealId) => {
  return async (dispatch) => {
    dispatch({ type: 'DELETE_DEAL'});
    try {
      const response = await axios.post("/api/deals/delete", { dealId });
      dispatch({ type: "DELETE_DEAL_SUCCESS", payload: response.data });
      dispatch(getDealsList());
      toast.success("Deal deleted successfully!");
      // history.push('/admin/deals');
    } catch (error) {
      dispatch({ type: "DELETE_DEAL_FAILURE", payload: error.response.data });
    }
  };
};