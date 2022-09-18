import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  ButtonGroup
} from "react-bootstrap";

function NewShipmentForm() {
  const assessRisks = () => {
      alert("A risk of typhoon is predicted along this route, re-route or expect critical delays");
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Create New Order</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Company (disabled)</label>
                        <Form.Control
                          defaultValue="Migros"
                          disabled
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Point of Contact
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Origin</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="City"
                          type="city"
                          as="input"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Destination</label>
                        <Form.Control
                          defaultValue="Zurich, Switzerland"
                          placeholder="City"
                          type="city"
                          as="input"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Desired Date of Arrival</label>
                        <Form.Control
                          defaultValue="29th October 2022"
                          placeholder="Date of Arrival"
                          type="date"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Notes</label>
                        <Form.Control
                          cols="80"
                          placeholder="Additional information about the shipment"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <ButtonGroup>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    onClick={() => assessRisks()}
                    variant="warning"
                  >
                    Assess Risks
                  </Button>
                  <div className="clearfix"></div>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Submit Order
                  </Button>
                  </ButtonGroup>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewShipmentForm;
