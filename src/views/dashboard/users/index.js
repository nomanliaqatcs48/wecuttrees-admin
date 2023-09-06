import React from "react"
import { Row, Col } from "reactstrap"
import Users from "./Users"
import "../../../assets/scss/pages/dashboard-analytics.scss"


class AnalyticsDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Users />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default AnalyticsDashboard
