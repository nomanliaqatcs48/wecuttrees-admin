import React, { useEffect, useState } from "react";
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
class DispatchedOrders extends React.Component {
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
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <Table
            responsive
            className="dashboard-table table-hover-animation mb-0 mt-1"
          >
            <thead>
              <tr>
                <th>USER ID</th>
                <th>USER</th>
                <th>USERNAME</th>
                <th>EMAIL ADDRESS</th>
                <th>REGISTRATION DATE</th>
                <th>STATUS</th>
                <th>ROLE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#879985</td>
                <td>
                  <ul className="list-unstyled users-list m-0 d-flex">
                    <li className="avatar pull-up">
                      <img
                        src={avatar3}
                        alt="avatar"
                        height="30"
                        width="30"
                        id="avatar5"
                      />
                      <UncontrolledTooltip placement="bottom" target="avatar5">
                        Trina Lynes
                      </UncontrolledTooltip>
                    </li>
                  </ul>
                </td>
                <td>Sana Zafar</td>
                <td>sana.zafar@invozone.com</td>
                <td>05-09-2023</td>
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
                  <span>Varified</span>
                </td>
                <td>Dealer</td>
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
                <td>#879985</td>

                <td>
                  <ul className="list-unstyled users-list m-0 d-flex">
                    <li className="avatar pull-up">
                      <img
                        src={avatar3}
                        alt="avatar"
                        height="30"
                        width="30"
                        id="avatar5"
                      />
                      <UncontrolledTooltip placement="bottom" target="avatar5">
                        Sana Zafar
                      </UncontrolledTooltip>
                    </li>
                  </ul>
                </td>
                <td>Sana Zafar</td>
                <td>sana.zafar@invozone.com</td>
                <td>05-09-2023</td>
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
                  <span>Unvarified</span>
                </td>
                <td>Dealer</td>
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
                <td>#879985</td>
                <td>
                  <ul className="list-unstyled users-list m-0 d-flex">
                    <li className="avatar pull-up">
                      <img
                        src={avatar3}
                        alt="avatar"
                        height="30"
                        width="30"
                        id="avatar5"
                      />
                      <UncontrolledTooltip placement="bottom" target="avatar5">
                        Trina Lynes
                      </UncontrolledTooltip>
                    </li>
                  </ul>
                </td>
                <td>Sana Zafar</td>
                <td>sana.zafar@invozone.com</td>
                <td>05-09-2023</td>
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
                  <span>Varified</span>
                </td>
                <td>Dealer</td>
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
                <td>#879985</td>

                <td>
                  <ul className="list-unstyled users-list m-0 d-flex">
                    <li className="avatar pull-up">
                      <img
                        src={avatar3}
                        alt="avatar"
                        height="30"
                        width="30"
                        id="avatar5"
                      />
                      <UncontrolledTooltip placement="bottom" target="avatar5">
                        Sana Zafar
                      </UncontrolledTooltip>
                    </li>
                  </ul>
                </td>
                <td>Sana Zafar</td>
                <td>sana.zafar@invozone.com</td>
                <td>05-09-2023</td>
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
                  <span>Unvarified</span>
                </td>
                <td>Dealer</td>
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
              </tr><tr>
                <td>#879985</td>
                <td>
                  <ul className="list-unstyled users-list m-0 d-flex">
                    <li className="avatar pull-up">
                      <img
                        src={avatar3}
                        alt="avatar"
                        height="30"
                        width="30"
                        id="avatar5"
                      />
                      <UncontrolledTooltip placement="bottom" target="avatar5">
                        Trina Lynes
                      </UncontrolledTooltip>
                    </li>
                  </ul>
                </td>
                <td>Sana Zafar</td>
                <td>sana.zafar@invozone.com</td>
                <td>05-09-2023</td>
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
                  <span>Varified</span>
                </td>
                <td>Dealer</td>
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
                <td>#879985</td>

                <td>
                  <ul className="list-unstyled users-list m-0 d-flex">
                    <li className="avatar pull-up">
                      <img
                        src={avatar3}
                        alt="avatar"
                        height="30"
                        width="30"
                        id="avatar5"
                      />
                      <UncontrolledTooltip placement="bottom" target="avatar5">
                        Sana Zafar
                      </UncontrolledTooltip>
                    </li>
                  </ul>
                </td>
                <td>Sana Zafar</td>
                <td>sana.zafar@invozone.com</td>
                <td>05-09-2023</td>
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
                  <span>Unvarified</span>
                </td>
                <td>Dealer</td>
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
export default DispatchedOrders;
