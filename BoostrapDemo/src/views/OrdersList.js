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

import shipments from "shipments-data";

function OrdersList() {
  const createOrderRow = (order) => {
    const status = order.warning_id ? "RISK OF DELAY" : "IN TIME";
    return (
      <tr>
        <td>{order.id}</td>
        <td>{order.category}</td>
        <td>{order.port_destination_name}</td>
        <td>{order.final_destination}</td>
        <td>{status}</td>
        <td>20th Jun 2023</td>
      </tr>
    );
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">All Migros Orders</Card.Title>
                <p className="card-category">
                  Orders List
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Category</th>
                      <th className="border-0">Distanation Port</th>
                      <th className="border-0">Final Destination</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">ETA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shipments.map((shipment)=> createOrderRow(shipment))}
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

export default OrdersList;
