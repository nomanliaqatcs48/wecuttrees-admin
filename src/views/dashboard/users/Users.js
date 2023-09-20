import React from "react";
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
import { connect } from 'react-redux';
import { fetchAllUsers, deleteUser } from '../../../redux/actions/user';
class DispatchedOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteAlert: false,
      userId: null,
    };
  }
  componentDidMount() {
    // Fetch users when the component mounts
    this.props.fetchAllUsers();
  }
  showDeleteAlert = (userID) => {
    this.setState({ deleteAlert: true, userId: userID });
  };

  // To hide the delete alert
  hideDeleteAlert = () => {
    this.setState({ deleteAlert: false, userId: null });
  };
  deleteUser = () => {
    this.props.deleteUser(this.state.userId);
    this.props.fetchAllUsers();
    this.setState({ deleteAlert: false });
  }
  render() {
    const { users, loading, error } = this.props;
    console.log("useers ---> ", users, " loading --->>>", loading, " error ---->>>>", error)
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    return (
      <>
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <Link className="addBtn" to="/user-create">
                Add
            </Link>
          </CardHeader>
          <Table
            responsive
            className="dashboard-table table-hover-animation mb-0 mt-1"
          >
            <thead>
              <tr>
                <th>USER ID</th>
                {/* <th>USER</th> */}
                <th>USERNAME</th>
                <th>EMAIL ADDRESS</th>
                <th>REGISTRATION DATE</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
           <tbody>
           {users?.map((user) => (
          <tr key={user._id}>
            <td>{user._id}</td>
            {/* <td>
              <ul className="list-unstyled users-list m-0 d-flex">
                <li className="avatar pull-up">
                  <img
                    src={avatar3} // Use the user's avatar image URL here
                    alt="avatar"
                    height="30"
                    width="30"
                    id={`avatar${user.id}`}
                  />
                  <UncontrolledTooltip placement="bottom" target={`avatar${user.id}`}>
                    {user.displayName}
                  </UncontrolledTooltip>
                </li>
              </ul>
            </td> */}
            <td>{user.displayName}</td>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>
              <Badge color={user.status === 'Verified' ? 'light-success' : 'light-danger'}>
                {user.status}
              </Badge>
            </td>
            <td>
            <Link
              to={{
                pathname: `/user-edit/${user._id}`,
                state: { user: user }, // Pass the user object in the state
              }}
            >
              <Edit size={20} />
            </Link>

              <Trash
                size={20}
                color="#ff0000"
                onClick={() => this.showDeleteAlert(user._id)}
              />
            </td>
          </tr>
        ))}
           </tbody>
           
          </Table>
        </Card>
        <SweetAlert
          title="Are you sure?"
          warning
          show={this.state.deleteAlert}
          showCancel
          reverseButtons
          cancelBtnBsStyle="danger"
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          onConfirm={() => {
            this.deleteUser();
          }}
          onCancel={() => {
            this.hideDeleteAlert();
          }}
        >
          You won't be able to revert this!
        </SweetAlert>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return{
  users: state.user.userReducer.users,
  loading: state.user.userReducer.loading,
  error: state.user.userReducer.error,
}
};

const mapDispatchToProps = {
  fetchAllUsers, // Connect the fetchAllUsers action to your component
  deleteUser,
};


export default connect(mapStateToProps, mapDispatchToProps)(DispatchedOrders);
