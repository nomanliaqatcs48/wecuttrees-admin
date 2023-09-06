import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
  Card,
  CardHeader,
  CardTitle,
} from "reactstrap";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss";
class UserCreate extends React.Component {
  state = {
    dob: new Date("2023-08-6"),
  };
  handledob = (date) => {
    this.setState({
      dob: date,
    });
  };
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Create User</CardTitle>
        </CardHeader>
        <Row className="p-2">
          <Col sm="12">
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" id="username" placeholder="Username" />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="username">Email Address</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="username">Registration Date</Label>
                    <Flatpickr
                      id="dob"
                      className="form-control"
                      options={{ dateFormat: "Y-m-d" }}
                      value={this.state.dob}
                      onChange={(date) => this.handledob(date)}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="status">Status</Label>
                    <Input type="select" name="status" id="status">
                      <option>Varified</option>
                      <option>Unvarified</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col
                  className="d-flex justify-content-end flex-wrap mt-2"
                  sm="12"
                >
                  <Button.Ripple className="mr-1" color="primary">
                    Save Changes
                  </Button.Ripple>
                  <Button.Ripple color="flat-warning">Reset</Button.Ripple>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Card>
    );
  }
}
export default UserCreate;
