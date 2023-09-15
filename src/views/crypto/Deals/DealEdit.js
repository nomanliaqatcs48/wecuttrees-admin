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
class DealEdit extends React.Component {
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
          <CardTitle>Edit Deal</CardTitle>
        </CardHeader>
        <Row className="p-2">
          <Col sm="12">
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="username">Deal Name</Label>
                    <Input type="text" id="deal name" placeholder="deal name" />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="username">Max  Price</Label>
                    <Input
                      type="number"
                      placeholder="Max Price"
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="username">Stop loss Price</Label>
                    <Input
                      type="number"
                      placeholder="Stop Loss Price"
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="username">Expiration Date</Label>
                    <Flatpickr
                      id="dob"
                      className="form-control"
                      options={{ dateFormat: "Y-m-d" }}
                      value={this.state.dob}
                      onChange={(date) => this.handledob(date)}
                    />
                  </FormGroup>
                </Col>
                {/* <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="status">Status</Label>
                    <Input type="select" name="status" id="status">
                      <option>Active</option>
                      <option>InActive</option>
                    </Input>
                  </FormGroup>
                </Col> */}
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
export default DealEdit;
