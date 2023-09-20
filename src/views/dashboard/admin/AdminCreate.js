import React, {useState, useEffect} from "react";
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
import { connect } from 'react-redux';
import { createAdmin, getAdminsList, updateAdmin } from '../../../redux/actions/admin';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"

const AdminCreate = () => {

  const dispatch = useDispatch();

  // const { userRole } = useSelector((state) => state.admin.admin);

  const [admin, setAdmin] = useState({
    displayName: '',
    email: '',
    password: '',
  })

  const { list } = useSelector((state) => state.admin.adminReducers);
  const [adminId, setAdminId] = useState('')

  const handleChange = e => {
    const { name, value } = e.target;
    setAdmin(prevState => ({
        ...prevState,
        [name]: value
    }));
  }

  useEffect(()=> {
    const path = window.location.pathname.split('/');
    if(path.length > 2){
      const userIfo = JSON.parse(
        localStorage.getItem(process.env.REACT_APP_USER_DATA)
      );
    
        axios.defaults.headers.common = {
          token: `${userIfo.accessToken}`,
        };
        dispatch(getAdminsList())
      setAdminId(path[2]);

    }else{
      setAdminId('')
    }
  },[])



  useEffect(()=> {
   if(list.length> 0 && adminId){
    const findAdmin = list.find(_l => _l._id === adminId);
    if(findAdmin){
      setAdmin(prevState => ({
        ...prevState,
        displayName: findAdmin.displayName,
        email: findAdmin.email,
        // password: '',
      }))
    }
   }
  },[list])

    const handleSubmit = (e) => {
      e.preventDefault();
      if(adminId){
       const data= {
        adminId: adminId,
        displayName: admin.displayName,
          
          // status: "un-verified"
      }
      dispatch(updateAdmin(data));
      }else{
      dispatch(createAdmin(admin));
      setAdmin(prevState => ({
        ...prevState,
        displayName: '',
        email: '',
        password: '',
      }));
    }
    }
    return (
      <Card>
        <CardHeader>
          <CardTitle>{adminId ? 'Edit': 'Create'} Admin</CardTitle>
        </CardHeader>
        <Row className="p-2">
          <Col sm="12">
            <Form onSubmit={e => handleSubmit(e)}>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="username">Admin Name</Label>
                    <Input type="text" name="displayName" id="displayName" value={admin.displayName} onChange={handleChange} placeholder="Username" />
                  </FormGroup>
                </Col>
                {!adminId && (
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="username">Email Address</Label>
                    <Input
                      type="email"
                      id="email"
                      value={admin.email}
                      name="email"
                      onChange={handleChange}
                      placeholder="Email Address"
                    />
                  </FormGroup>
                </Col>
                )}
                {!adminId && (
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="username">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      value={admin.password}
                      name="password"
                      onChange={handleChange}
                      placeholder="Password"
                    />
                  </FormGroup>
                </Col>
)}
                {/* <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="status">Status</Label>
                    <Input type="select" name="status" id="status">
                      <option>Varified</option>
                      <option>Unvarified</option>
                    </Input>
                  </FormGroup>
                </Col> */}
                <Col
                  className="d-flex justify-content-end flex-wrap mt-2"
                  sm="12"
                >
                  <Button.Ripple className="mr-1" color="primary" type="submit">
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
export default AdminCreate;
