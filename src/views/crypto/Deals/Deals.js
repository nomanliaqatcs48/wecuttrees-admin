import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  Table,
  Button,
} from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
class Deals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteAlert: false,
    };
  }
  showDeleteAlert = () => {
    this.setState({ deleteAlert: true });
  }
  
  // To hide the delete alert
  hideDeleteAlert = () => {
    this.setState({ deleteAlert: false });
  }
  render() {
    return (
      <>
        <Card>
          <CardHeader>
            <CardTitle>Deals</CardTitle>
          </CardHeader>
          <Table
            responsive
            className="dashboard-table table-hover-animation mb-0 mt-1"
          >
            <thead>
              <tr>
                <th>DEAL  NAME</th>
                <th>CREATED BY</th>
                <th>MAX PRICE</th>
                <th>EXPIRATION DATE</th>
                <th>COIN</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>XYZ Deal</td>
                <td>Sana Zafar</td>
                <td>12000  USD</td>
                <td>05-09-2023</td>
                <td>Bitcoin</td>
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
                  <span>Active</span>
                </td>
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
                <td>XYZ Deal</td>
                <td>Sana Zafar</td>
                <td>12000  USD</td>
                <td>05-09-2023</td>
                <td>Bitcoin</td>
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
                  <span>InActive</span>
                </td>
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
                <td>XYZ Deal</td>
                <td>Sana Zafar</td>
                <td>12000  USD</td>
                <td>05-09-2023</td>
                <td>Bitcoin</td>
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
                  <span>Active</span>
                </td>
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
                <td>XYZ Deal</td>
                <td>Sana Zafar</td>
                <td>12000  USD</td>
                <td>05-09-2023</td>
                <td>Bitcoin</td>
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
                  <span>InActive</span>
                </td>
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
                <td>XYZ Deal</td>
                <td>Sana Zafar</td>
                <td>12000  USD</td>
                <td>05-09-2023</td>
                <td>Bitcoin</td>
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
                  <span>Active</span>
                </td>
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
                <td>XYZ Deal</td>
                <td>Sana Zafar</td>
                <td>12000  USD</td>
                <td>05-09-2023</td>
                <td>Bitcoin</td>
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
                  <span>InActive</span>
                </td>
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
export default Deals;
