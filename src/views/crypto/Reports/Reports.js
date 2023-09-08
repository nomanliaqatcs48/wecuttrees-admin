import React from "react";
import { Card, CardHeader, CardTitle, Table, Badge } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import { Link } from "react-router-dom";
import PaginationIconsAndText from "../../../components/reactstrap/pagination/PaginationIconsAndText";
import { Edit, Trash } from "react-feather";
class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteAlert: false,
    };
  }
  showDeleteAlert = () => {
    this.setState({ deleteAlert: true });
  };

  // To hide the delete alert
  hideDeleteAlert = () => {
    this.setState({ deleteAlert: false });
  };
  render() {
    return (
      <>
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <Link className="addBtn" to="/report-create">
              Add
            </Link>
          </CardHeader>
          <Table
            responsive
            style={{ width: "1600px" }}
            className="dashboard-table table-hover-animation mb-0 mt-1"
          >
            <thead>
              <tr>
                <th>REPORT ID</th>
                <th>REPORT TYPE</th>
                <th>REPORTED BY</th>
                <th>REPORTED DATE</th>
                <th>DESCRIPTION</th>
                <th>STATUS</th>
                <th>USER</th>
                <th>DEAL</th>
                <th>ACTIVITY DATE</th>
                <th>SUCCESS RATE</th>
                <th>ADDITIONAL INFORMATION</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#12345</td>
                <td>Account Issue</td>
                <td>Admin User</td>
                <td>2023-09-10 14:30</td>
                <td>User XYZ has account login issues.</td>
                <td>
                  <Badge color="light-success">OPEN</Badge>
                </td>
                <td>User XYZ</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>
                  <Link to="/report-edit">
                    <Edit size={20} />
                  </Link>
                  <Trash
                    size={20}
                    color="#ff0000"
                    onClick={this.showDeleteAlert}
                  />
                </td>
              </tr>
              <tr>
                <td>#12345</td>
                <td>Account Issue</td>
                <td>Admin User</td>
                <td>2023-09-10 14:30</td>
                <td>User XYZ has account login issues.</td>
                <td>
                  <Badge color="light-danger">CLOSE</Badge>
                </td>
                <td>User XYZ</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>
                  <Link to="/report-edit">
                    <Edit size={20} />
                  </Link>
                  <Trash
                    size={20}
                    color="#ff0000"
                    onClick={this.showDeleteAlert}
                  />
                </td>
              </tr>
              <tr>
                <td>#12345</td>
                <td>Account Issue</td>
                <td>Admin User</td>
                <td>2023-09-10 14:30</td>
                <td>User XYZ has account login issues.</td>
                <td>
                  <Badge color="light-success">OPEN</Badge>
                </td>
                <td>User XYZ</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>
                  <Link to="/report-edit">
                    <Edit size={20} />
                  </Link>
                  <Trash
                    size={20}
                    color="#ff0000"
                    onClick={this.showDeleteAlert}
                  />
                </td>
              </tr>
              <tr>
                <td>#12345</td>
                <td>Account Issue</td>
                <td>Admin User</td>
                <td>2023-09-10 14:30</td>
                <td>User XYZ has account login issues.</td>
                <td>
                  <Badge color="light-danger">CLOSE</Badge>
                </td>
                <td>User XYZ</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>
                  <Link to="/report-edit">
                    <Edit size={20} />
                  </Link>
                  <Trash
                    size={20}
                    color="#ff0000"
                    onClick={this.showDeleteAlert}
                  />
                </td>
              </tr>
              <tr>
                <td>#12345</td>
                <td>Account Issue</td>
                <td>Admin User</td>
                <td>2023-09-10 14:30</td>
                <td>User XYZ has account login issues.</td>
                <td>
                  <Badge color="light-success">OPEN</Badge>
                </td>
                <td>User XYZ</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>
                  <Link to="/report-edit">
                    <Edit size={20} />
                  </Link>
                  <Trash
                    size={20}
                    color="#ff0000"
                    onClick={this.showDeleteAlert}
                  />
                </td>
              </tr>
              <tr>
                <td>#12345</td>
                <td>Account Issue</td>
                <td>Admin User</td>
                <td>2023-09-10 14:30</td>
                <td>User XYZ has account login issues.</td>
                <td>
                  <Badge color="light-danger">CLOSE</Badge>
                </td>
                <td>User XYZ</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>
                  <Link to="/report-edit">
                    <Edit size={20} />
                  </Link>
                  <Trash
                    size={20}
                    color="#ff0000"
                    onClick={this.showDeleteAlert}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
          <PaginationIconsAndText />
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
            this.hideDeleteAlert();
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
export default Reports;
