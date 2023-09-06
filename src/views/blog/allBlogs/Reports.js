import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  Table,
  UncontrolledTooltip,
  Button,
} from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import avatar3 from "../../../assets/img/portrait/small/avatar-s-10.jpg";
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
          </CardHeader>
          <Table
            responsive
            style={{width:'1700px'}}
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
                  <div
                    className="bg-success"
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  />
                  <span>Open</span>
                </td>
                <td>User XYZ</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>
                  <Button.Ripple className="mr-1 mb-1" color="primary">
                    Edit
                  </Button.Ripple>
                  <Button.Ripple
                    className="mr-1 mb-1"
                    color="danger"
                    onClick={this.showDeleteAlert}
                  >
                    <span>Delete</span>
                  </Button.Ripple>
                </td>
              </tr>
              <tr>
                <td>#12345</td>
                <td>Account Issue</td>
                <td>Admin User</td>
                <td>2023-09-10 14:30</td>
                <td>User XYZ has account login issues.</td>
                <td>
                  <div
                    className="bg-danger"
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  />
                  <span>Close</span>
                </td>
                <td>User XYZ</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>
                  <Button.Ripple className="mr-1 mb-1" color="primary">
                    Edit
                  </Button.Ripple>
                  <Button.Ripple
                    className="mr-1 mb-1"
                    color="danger"
                    onClick={this.showDeleteAlert}
                  >
                    <span>Delete</span>
                  </Button.Ripple>
                </td>
              </tr>
              <tr>
                <td>#12345</td>
                <td>Account Issue</td>
                <td>Admin User</td>
                <td>2023-09-10 14:30</td>
                <td>User XYZ has account login issues.</td>
                <td>
                  <div
                    className="bg-success"
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  />
                  <span>Open</span>
                </td>
                <td>User XYZ</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>
                  <Button.Ripple className="mr-1 mb-1" color="primary">
                    Edit
                  </Button.Ripple>
                  <Button.Ripple
                    className="mr-1 mb-1"
                    color="danger"
                    onClick={this.showDeleteAlert}
                  >
                    <span>Delete</span>
                  </Button.Ripple>
                </td>
              </tr>
              <tr>
                <td>#12345</td>
                <td>Account Issue</td>
                <td>Admin User</td>
                <td>2023-09-10 14:30</td>
                <td>User XYZ has account login issues.</td>
                <td>
                  <div
                    className="bg-danger"
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  />
                  <span>Close</span>
                </td>
                <td>User XYZ</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>
                  <Button.Ripple className="mr-1 mb-1" color="primary">
                    Edit
                  </Button.Ripple>
                  <Button.Ripple
                    className="mr-1 mb-1"
                    color="danger"
                    onClick={this.showDeleteAlert}
                  >
                    <span>Delete</span>
                  </Button.Ripple>
                </td>
              </tr>
              <tr>
                <td>#12345</td>
                <td>Account Issue</td>
                <td>Admin User</td>
                <td>2023-09-10 14:30</td>
                <td>User XYZ has account login issues.</td>
                <td>
                  <div
                    className="bg-success"
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  />
                  <span>Open</span>
                </td>
                <td>User XYZ</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>
                  <Button.Ripple className="mr-1 mb-1" color="primary">
                    Edit
                  </Button.Ripple>
                  <Button.Ripple
                    className="mr-1 mb-1"
                    color="danger"
                    onClick={this.showDeleteAlert}
                  >
                    <span>Delete</span>
                  </Button.Ripple>
                </td>
              </tr>
              <tr>
                <td>#12345</td>
                <td>Account Issue</td>
                <td>Admin User</td>
                <td>2023-09-10 14:30</td>
                <td>User XYZ has account login issues.</td>
                <td>
                  <div
                    className="bg-danger"
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  />
                  <span>Close</span>
                </td>
                <td>User XYZ</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>
                  <Button.Ripple className="mr-1 mb-1" color="primary">
                    Edit
                  </Button.Ripple>
                  <Button.Ripple
                    className="mr-1 mb-1"
                    color="danger"
                    onClick={this.showDeleteAlert}
                  >
                    <span>Delete</span>
                  </Button.Ripple>
                </td>
              </tr>
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
