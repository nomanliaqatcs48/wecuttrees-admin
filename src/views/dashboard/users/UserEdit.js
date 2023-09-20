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

import { editUser } from '../../../redux/actions/user';
import { connect } from 'react-redux';

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    const { user } = props.location.state;
    this.state = {
      user: {
        id: user._id,
        email: user.email,
        password: user.password,
        displayName: user.displayName || "", // Initialize with empty string
        status: user.status, // Set the default value
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // Here, you can perform actions like making an API request to update user data
    const updatedUser = this.state.user;
    console.log("Updated user data:", updatedUser);
    this.props.editUser(updatedUser);
    
    // You can use Redux actions or any other method to update the user data
  };

  render() {
    const { user } = this.state;

    return (
      <Card>
        <CardHeader>
          <CardTitle>Edit User</CardTitle>
        </CardHeader>
        <Row className="p-2">
          <Col sm="12">
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                      type="text"
                      id="username"
                      name="displayName"
                      placeholder="Username"
                      value={user?.displayName}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="status">Status</Label>
                    <Input
                      type="select"
                      name="status"
                      id="status"
                      value={user?.status}
                      onChange={this.handleInputChange}
                    >
                      <option>Verified</option>
                      <option>un-verified</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col
                  className="d-flex justify-content-end flex-wrap mt-2"
                  sm="12"
                >
                  <Button.Ripple className="mr-1" color="primary" type='submit'>
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


const mapDispatchToProps = {
  editUser, // Connect the editUser action to your component
};

export default connect(null, mapDispatchToProps)(UserEdit);