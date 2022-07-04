import React from "react";
import { Button, Card } from "react-bootstrap";
import "../assets/css/User.css";
const Users = () => {
  return (
    <center>
        <Card style={{ marginTop: 15 }} className="user-card">
          <Card.Body>
            <Card.Title>User's Name</Card.Title>
           
            <Card.Text>
              abc@gmail.com
              <br /> +9111111111
            </Card.Text>
            <center>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#dc3545", color: "white" }}
              >
                View Placed Orders
              </Button>
            </center>
          </Card.Body>
        </Card>
    </center>
  );
};

export default Users;
