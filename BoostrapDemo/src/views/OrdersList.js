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

import shipments from "../shipments-data";
import risks from "../risks-data";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function OrdersList() {
  const [risksData, setRisksData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api-migros-supply-chain.herokuapp.com/warnings")
      .then((data) => data.json())
      .then((json) => {
        setRisksData(json);
      })
  }, []);
  const risksMap = {};
  risks.forEach((risk) => {
    risksMap[risk.id] = risk.warning_text;
  })
  const renderTooltip = (text, props) => (
    <Tooltip {...props}>{text}</Tooltip>
  );
  const createOrderRow = (order, index) => {
    const status = order.warning_id ? "RISK OF DELAY" : "IN TIME";
    return (
      <tr>
        <td>{index}</td>
        <td>{order.product_name}</td>
        <td>{order.port_of_loading + ', ' + order.port_loading_country}</td>
        <td>{order.port_destination_name + ', ' + order.port_destination_country}</td>
        <td>{order.destination_location}</td>
        <OverlayTrigger placement="top" overlay={renderTooltip(risksMap[order.warning_id])}>
          <td>{status}</td>
        </OverlayTrigger>
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
                      <th className="border-0">Product</th>
                      <th className="border-0">Loading Port</th>
                      <th className="border-0">Distanation Port</th>
                      <th className="border-0">Final Destination</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">ETA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shipments.map((shipment, index) => createOrderRow(shipment, index))}
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
