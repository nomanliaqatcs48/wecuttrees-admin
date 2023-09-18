import React, {useEffect, useState} from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  Table,
  UncontrolledTooltip,
  Badge,
} from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import avatar3 from "../../../assets/img/portrait/small/avatar-s-10.jpg";
import { Link } from "react-router-dom";
import PaginationIconsAndText from "../../../components/reactstrap/pagination/PaginationIconsAndText";
import { Edit, Trash } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { getAdminsList, deleteAdmin } from '../../../redux/actions/admin';
import axios from "axios";

const Admins = () => {
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState('')
  const [adminsList, setAdminsList] = useState([])
  const { list } = useSelector((state) => state.admin.adminReducers);
  const dispatch = useDispatch();
  const showDeleteAlert = (id) => {
    setDeleteAlert(true);
    setSelectedAdminId(id)
  };

  useEffect(() => {

  const userIfo = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_USER_DATA)
  );

    axios.defaults.headers.common = {
      token: `${userIfo.accessToken}`,
    };
    dispatch(getAdminsList())
  }, []);

  useEffect(() => {
    setAdminsList(list);

  }, [list]);
  // To hide the delete alert
  const hideDeleteAlert = () => {
    setDeleteAlert(false);
    setSelectedAdminId('')
  };
  // render() {
    return (
      <>
        <Card>
          <CardHeader>
            <CardTitle>Admins</CardTitle>
            <Link className="addBtn" to="/admin-create">
                Add
            </Link>
          </CardHeader>
          <Table
            responsive
            className="dashboard-table table-hover-animation mb-0 mt-1"
          >
            <thead>
              <tr>
                <th>ADMIN ID</th>
                {/* <th>ADMIN</th> */}
                <th>ADMIN NAME</th>
                <th>EMAIL ADDRESS</th>
                <th>REGISTRATION DATE</th>
                {/* <th>STATUS</th> */}
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {adminsList.length>0 && adminsList.map((admin, i) => (
              <tr key={i}>
                <td>{admin._id}</td>
                
                <td>{admin.displayName}</td>
                <td>{admin.email}</td>
                <td>{admin.createdAt}</td>
                {/* <td>
                  <Badge color="light-success">VARIFIED</Badge>
                </td> */}
                <td>
                  <Link to={`admin-edit/${admin._id}`}>
                    <Edit size={20} />
                  </Link>
                  <Trash size={20} style={{cursor: 'pointer'}} color="#ff0000" onClick={()=> showDeleteAlert(admin._id)} />
                </td>
              </tr>
              ))}
            </tbody>
           
          </Table>
          <PaginationIconsAndText/>
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
            dispatch(deleteAdmin(selectedAdminId));
            hideDeleteAlert();
          }}
          onCancel={() => {
            hideDeleteAlert();
          }}
        >
          You won't be able to revert this!
        </SweetAlert>
      </>
    );
  // }
}
export default Admins;
