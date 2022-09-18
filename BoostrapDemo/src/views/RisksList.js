import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import risks from "../risks-data";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


function RisksList() {
  const renderTooltip = (text,props) => (
    <Tooltip {...props}>{text}</Tooltip>
  );
  const createDataRow = (risk) => {
    return (
      <tr>
        <td>{risk.id}</td>
        <OverlayTrigger placement="top" overlay={renderTooltip(risk.warning_text)}>
        <td>{risk.event}</td>
        </OverlayTrigger>
        <td>{Math.floor(Math.random() * 5) + 1}</td>
        <td>{risk.last_location.last_longitude}</td>
        <td>{risk.last_location.last_latitude}</td>
        <td>30th Aug 2022</td>
      </tr>
    )
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">All Current Risks</Card.Title>
                <p className="card-category">
                  Risks List
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Category</th>
                      <th className="border-0">Severity</th>
                      <th className="border-0">longitude</th>
                      <th className="border-0">latitude</th>
                      <th className="border-0">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {risks.map((risk)=> createDataRow(risk))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RisksList;
