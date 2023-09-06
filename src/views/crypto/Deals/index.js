import React from "react"
import {Row, Col} from "reactstrap"
import Deals from "./Deals"

class AddBlog extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg="12" md="12">
            <Deals/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default AddBlog
