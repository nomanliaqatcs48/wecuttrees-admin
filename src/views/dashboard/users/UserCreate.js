// CreateUserForm.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../../redux/actions/user';

class UserCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      status: 'Verified',
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the createUser action with the form data
    this.props.createUser(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <label htmlFor="displayName">Username</label>
              <input
                type="text"
                id="displayName"
                className="form-control"
                placeholder="Username"
                onChange={this.handleInputChange}
                value={this.state.displayName}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email Address"
                onChange={this.handleInputChange}
                value={this.state.email}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
                onChange={this.handleInputChange}
                value={this.state.password}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                className="form-control"
                onChange={this.handleInputChange}
                value={this.state.status}
              >
                <option>Verified</option>
                <option>Unverified</option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end flex-wrap mt-2">
          <button className="btn btn-primary mr-1" type="submit">
            Save Changes
          </button>
          <button className="btn btn-flat-warning" type="button">
            Reset
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createUser,
};

export default connect(null, mapDispatchToProps)(UserCreate);
