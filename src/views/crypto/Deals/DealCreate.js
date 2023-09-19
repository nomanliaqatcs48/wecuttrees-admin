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
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getDealsList, createDeal, updateDeal } from '../../../redux/actions/deal';

const DealCreate = () => {
  const dispatch = useDispatch();

  // const { userRole } = useSelector((state) => state.admin.admin);
  const initialState = {
    coinName: "",
    coinAddress: "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada",
    targetPrice: "",
    stopLossPrice: "",
    dealEndTime: new Date(),
    ownerId: "64d424537bd586435a805593"
  }
  const [dealData, setDealData] = useState(initialState);

  const { list } = useSelector((state) => state.deal.dealReducers);
  const [dealId, setDealId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDealData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const path = window.location.pathname.split("/");
    if (path.length > 2) {
      const userIfo = JSON.parse(
        localStorage.getItem(process.env.REACT_APP_USER_DATA)
      );

      axios.defaults.headers.common = {
        token: `${userIfo.accessToken}`,
      };
      dispatch(getDealsList());
      setDealId(path[2]);
    } else {
      setDealId("");
    }
  }, []);

  useEffect(() => {
    if (list.length > 0 && dealId) {
      const findDeal = list.find((_l) => _l._id === dealId);
      if (findDeal) {
        setDealData((prevState) => ({
          ...prevState,
          coinName: findDeal.coinName,
          targetPrice: findDeal.targetPrice,
          stopLossPrice: findDeal.stopLossPrice

        }));
      }
    }
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dealId) {
      const data = {
        dealId,
        coinName: dealData.coinName,

        // status: "un-verified"
      };
      dispatch(updateDeal(data));
    } else {
      dispatch(createDeal(dealData));
      setDealData(initialState);
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>{dealId ? 'Edit' : 'Create'} Deal</CardTitle>
      </CardHeader>
      <Row className="p-2">
        <Col sm="12">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="username">Deal Name</Label>
                  <Input type="text" id="deal name" name="coinName" value={dealData.coinName}  onChange={handleChange} placeholder="deal name" />
                </FormGroup>
              </Col>
              {/* <Col md="6" sm="12">
                <FormGroup>
                  <Label for="username">Created By</Label>
                  <Input type="text" placeholder="created by" />
                </FormGroup>
              </Col> */}
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="username">Max Price</Label>
                  <Input type="number" name="targetPrice" value={dealData.targetPrice}  onChange={handleChange} placeholder="Max Price" />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="username">Stop loss Price</Label>
                  <Input type="number" name="stopLossPrice" value={dealData.stopLossPrice}  onChange={handleChange} placeholder="Stop Loss Price" />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="username">Expiration Date</Label>
                  <Flatpickr
                    id="dob"
                    className="form-control"
                    options={{ dateFormat: "Y-m-d" }}
                    value={dealData.dealEndTime}
                    onChange={(date) =>setDealData(prevState => ({...prevState, 'dealEndTime': date[0]}))}
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
};
export default DealCreate;
