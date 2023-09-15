import React from "react";
import { Card, CardHeader, CardTitle, Table, Badge } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import { Link } from "react-router-dom";
import PaginationIconsAndText from "../../../components/reactstrap/pagination/PaginationIconsAndText";
import { Edit, Trash } from "react-feather";
class Deals extends React.Component {
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
            <CardTitle>Deals</CardTitle>
          </CardHeader>
          <Table
            responsive
            className="dashboard-table table-hover-animation mb-0 mt-1"
          >
            <thead>
              <tr>
                <th>DEAL NAME</th>
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
                <td>12000 USD</td>
                <td>05-09-2023</td>
                <td>Bitcoin</td>
                <td>
                  <Badge color="light-success">ACTIVE</Badge>
                </td>
                  <td>
                    <Link to="/deal-edit">
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
                <td>XYZ Deal</td>
                <td>Sana Zafar</td>
                <td>12000 USD</td>
                <td>05-09-2023</td>
                <td>Bitcoin</td>
                <td>
                  <Badge color="light-danger">INACTIVE</Badge>
                </td>
                <td>
                  <Link to="/deal-edit">
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
                <td>XYZ Deal</td>
                <td>Sana Zafar</td>
                <td>12000 USD</td>
                <td>05-09-2023</td>
                <td>Bitcoin</td>
                <td>
                  <Badge color="light-success">ACTIVE</Badge>
                </td>
                <td>
                  <Link to="/deal-edit">
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
                <td>XYZ Deal</td>
                <td>Sana Zafar</td>
                <td>12000 USD</td>
                <td>05-09-2023</td>
                <td>Bitcoin</td>
                <td>
                  <Badge color="light-danger">INACTIVE</Badge>
                </td>
                <td>
                  <Link to="/deal-edit">
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
                <td>XYZ Deal</td>
                <td>Sana Zafar</td>
                <td>12000 USD</td>
                <td>05-09-2023</td>
                <td>Bitcoin</td>
                <td>
                  <Badge color="light-success">ACTIVE</Badge>
                </td>
                <td>
                  <Link to="/deal-edit">
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
                <td>XYZ Deal</td>
                <td>Sana Zafar</td>
                <td>12000 USD</td>
                <td>05-09-2023</td>
                <td>Bitcoin</td>
                <td>
                  <Badge color="light-danger">INACTIVE</Badge>
                </td>
                <td>
                  <Link to="/deal-edit">
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
export default Deals;
