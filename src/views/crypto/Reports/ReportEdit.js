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
class ReportEdit extends React.Component {
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
          <CardTitle>Edit Report</CardTitle>
        </CardHeader>
        <Row className="p-2">
          <Col sm="12">
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
              <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="status">Report Type</Label>
                    <Input type="select">
                      <option>Account Issue</option>
                      <option>Other</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label>Reported By</Label>
                    <Input type="text" placeholder="reported by" />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label>Report Date</Label>
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
                      <option>Open</option>
                      <option>Close</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label>User Name</Label>
                    <Input type="text" placeholder="user name" />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label>Deal</Label>
                    <Input type="text" placeholder="deal" />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label>Activity Date</Label>
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
                    <Label>Success Rate</Label>
                    <Input type="number" placeholder="success rate" />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label>Description</Label>
                    <Input type="textarea" placeholder="description" />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label>Additional Information</Label>
                    <Input type="textarea" placeholder="additional information" />
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
export default ReportEdit;
