import React from "react"
import {Row, Col} from "reactstrap"
import prism from "prismjs"
import Reports from "./Reports"
import "prismjs/components/prism-jsx.min"

class Tables extends React.Component {

  componentDidMount() {
    prism.highlightAll()
  }


  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Reports/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Tables
