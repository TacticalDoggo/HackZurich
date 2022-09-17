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

function RisksList() {
  const createDataRow = (risk) => {
    return (
      <tr>
        <td>{risk.id}</td>
        <td>{risk.warning_type}</td>
        <td>{risk.severity}</td>
        <td>{risk.location}</td>
        <td>{risk.time}</td>
        <td>20th Jun 2023</td>
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
                      <th className="border-0">Name</th>
                      <th className="border-0">Loading Port</th>
                      <th className="border-0">Distanation Port</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">ETA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Potatoes</td>
                      <td>Shanghai</td>
                      <td>Switzerland</td>
                      <td>In Risk</td>
                      <td>20th Jun 2023</td>
                    </tr>
                     <tr>
                      <td>2</td>
                      <td>Rice</td>
                      <td>China</td>
                      <td>Morroco</td>
                      <td>High Risk</td>
                      <td>20th Jun 2023</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Bananas</td>
                      <td>Argentina</td>
                      <td>United States</td>
                      <td>Safe</td>
                      <td>20th Jun 2023</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Bottled Water</td>
                      <td>Mexico</td>
                      <td>South Korea</td>
                      <td>Low Risk</td>
                      <td>20th Jun 2023</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Wine</td>
                      <td>Spain</td>
                      <td>Canada</td>
                      <td>Low Risk</td>
                      <td>20th Jun 2023</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Cheese</td>
                      <td>Scotland</td>
                      <td>Australia</td>
                      <td>Safe</td>
                      <td>20th Jun 2023</td>
                    </tr>
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
