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

function RisksList() {
  const createDataRow = (risk) => {
    return (
      <tr key={risk.id}>
        <td>{risk.id}</td>
        <td>{risk.category}</td>
        <td>{risk.severity}</td>
        <td>{JSON.stringify(risk.location)}</td>
        <td>{risk.time}</td>
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
                <Card.Title as="h4">All Migros RisksList</Card.Title>
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
                      <th className="border-0">Location</th>
                      <th className="border-0">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {risks.map((risk) => createDataRow(risk))}
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
