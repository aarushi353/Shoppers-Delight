import React from "react";
import { Button, Card } from "react-bootstrap";
import "../assets/css/User.css";
const User = () => {
  return (
    <center>
      <div className="users">
        <Card style={{ marginTop: 15 }} className="user-card">
          <Card.Body>
            <Card.Title>User's Name</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              User's Status
            </Card.Subtitle>
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
                Button
              </Button>
            </center>
          </Card.Body>
        </Card>
        <Card style={{ marginTop: 15 }} className="user-card">
          <Card.Body>
            <Card.Title>User's Name</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              User's Status
            </Card.Subtitle>
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
                Button
              </Button>
            </center>
          </Card.Body>
        </Card>
        <Card style={{ marginTop: 15 }} className="user-card">
          <Card.Body>
            <Card.Title>User's Name</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              User's Status
            </Card.Subtitle>
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
                Button
              </Button>
            </center>
          </Card.Body>
        </Card>
      </div>
    </center>
  );
};

export default User;
