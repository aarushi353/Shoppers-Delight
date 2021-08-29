import React from "react";
import { ListGroup, Card } from "react-bootstrap";
const Order = () => {
  return (
    <center>
      <Card style={{ marginLeft: 80, marginRight: 80, marginTop: 15 }}>
        <Card.Header style={{backgroundColor: "#dc3545", color: "white"}}>
          <strong>Order #1</strong>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Bracelet</ListGroup.Item>
          <ListGroup.Item>T-Shirts</ListGroup.Item>
          <ListGroup.Item>Laptop</ListGroup.Item>
        </ListGroup>
      </Card>
    </center>
  );
};

export default Order;
