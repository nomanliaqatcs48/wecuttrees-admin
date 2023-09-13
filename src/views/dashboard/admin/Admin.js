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
class Admins extends React.Component {
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
                <th>ADMIN</th>
                <th>ADMIN NAME</th>
                <th>EMAIL ADDRESS</th>
                <th>REGISTRATION DATE</th>
                <th>STATUS</th>
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
                  <Badge color="light-success">VARIFIED</Badge>
                </td>
                <td>
                  <Link to="/admin-edit">
                    <Edit size={20} />
                  </Link>
                  <Trash size={20} color="#ff0000" onClick={this.showDeleteAlert} />
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
                <Badge color="light-danger">UNVARIFIED</Badge>
                </td>
                <td>
                  <Link to="/admin-edit">
                    <Edit size={20} />
                  </Link>
                  <Trash size={20} color="#ff0000" onClick={this.showDeleteAlert} />
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
                 <Badge color="light-success">VARIFIED</Badge>
                </td>
                <td>
                  <Link to="/admin-edit">
                    <Edit size={20} />
                  </Link>
                  <Trash size={20} color="#ff0000" onClick={this.showDeleteAlert} />
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
                  <Badge color="light-danger">UNVARIFIED</Badge>
                </td>
                <td>
                  <Link to="/admin-edit">
                    <Edit size={20} />
                  </Link>
                  <Trash size={20} color="#ff0000" onClick={this.showDeleteAlert} />
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
                 <Badge color="light-success">VARIFIED</Badge>
                </td>
                <td>
                  <Link to="/admin-edit">
                    <Edit size={20} />
                  </Link>
                  <Trash size={20} color="#ff0000" onClick={this.showDeleteAlert} />
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
                  <Badge color="light-danger">UNVARIFIED</Badge>
                </td>
                <td>
                  <Link to="/admin-edit">
                    <Edit size={20} />
                  </Link>
                  <Trash size={20} color="#ff0000" onClick={this.showDeleteAlert} />
                </td>
              </tr>
            </tbody>
           
          </Table>
          <PaginationIconsAndText/>
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
export default Admins;
