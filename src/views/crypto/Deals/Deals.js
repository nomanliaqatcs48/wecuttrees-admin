import React, {useState, useEffect} from "react";
import { Card, CardHeader, CardTitle, Table, Badge } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import { Link } from "react-router-dom";
import PaginationIconsAndText from "../../../components/reactstrap/pagination/PaginationIconsAndText";
import { Edit, Trash } from "react-feather";
import { getDealsList, deleteDeal } from '../../../redux/actions/deal';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";

const Deals = () => {
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [selectedAdminId, setSelectedDealId] = useState('')
  const [dealsList, setDealsList] = useState([])
  const { list } = useSelector((state) => state.deal.dealReducers);
  const dispatch = useDispatch();
  const showDeleteAlert = (id) => {
    setDeleteAlert(true);
    setSelectedDealId(id)
  };

  useEffect(() => {

  const userIfo = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_USER_DATA)
  );

    axios.defaults.headers.common = {
      token: `${userIfo.accessToken}`,
    };
    dispatch(getDealsList())
  }, []);

  useEffect(() => {
    setDealsList(list);
  }, [list]);
  // To hide the delete alert
  const hideDeleteAlert = () => {
    setDeleteAlert(false);
    setSelectedDealId('')
  };
    return (
      <>
        <Card>
          <CardHeader>
            <CardTitle>Deals</CardTitle>
            <Link className="addBtn" to="/deal-create">
                Add
            </Link>
          </CardHeader>
          
          <Table
            responsive
            className="dashboard-table table-hover-animation mb-0 mt-1"
          >
            <thead>
              <tr>
                {/* <th>DEAL NAME</th> */}
                <th>COIN</th>
                {/* <th>CREATED BY</th> */}
                <th>MAX PRICE</th>
                <th>STOP LESS PRICE</th>
                <th>EXPIRATION DATE</th>
                {/* <th>COIN</th> */}
                {/* <th>STATUS</th> */}
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
            {dealsList.length>0 && dealsList.map((deal, i) => (
              <tr key={i}>
                <td>{deal.coinName}</td>
                <td>{deal.targetPrice} USD</td>
                <td>{deal.stopLossPrice} USD</td>
                
                <td>{moment(deal.dealEndTime).format("YYYY-MM-DD")}</td>
                {/* <td>Bitcoin</td> */}
                {/* <td>
                  <Badge color="light-danger">INACTIVE</Badge>
                </td> */}
                <td>
                  <Link to={`/deal-edit/${deal._id}`}>
                    <Edit size={20} style={{cursor: 'pointer'}}  />
                  </Link>
                  <Trash
                    size={20}
                    color="#ff0000"
                    onClick={()=> showDeleteAlert(deal._id)}
                    style={{cursor: 'pointer'}} 
                  />
                </td>
              </tr>))}
            </tbody>
          </Table>
          {/* <PaginationIconsAndText /> */}
        </Card>
        <SweetAlert
          title="Are you sure?"
          warning
          show={deleteAlert}
          showCancel
          reverseButtons
          cancelBtnBsStyle="danger"
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          onConfirm={() => {
            hideDeleteAlert();
            dispatch(deleteDeal(selectedAdminId));
          }}
          onCancel={() => {
            hideDeleteAlert();
          }}
        >
          You won't be able to revert this!
        </SweetAlert>
      </>
    );
  }
export default Deals;
