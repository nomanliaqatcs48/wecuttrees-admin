import React from "react"
import { Row, Col } from "reactstrap"
import Admin from "./Admin"
import "../../../assets/scss/pages/dashboard-analytics.scss"


class AnalyticsDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Admin />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default AnalyticsDashboard
