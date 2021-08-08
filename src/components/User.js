import React from "react";
import { Alert } from "react-bootstrap";
const User = () => {
    const items = [ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light',
    'dark', ];
  return (
    <center>
      {items.map((variant, idx) => (
      <Alert key={idx} variant={variant} style={{width: 600}}>
          <p style={{textAlign: 'left'}}>
        Name: Mitesh Jindal <br /> Email: mjindal_be20@thapar.edu <br /> Status: User
        </p>
      </Alert>
      ))}
    </center>
  );
};

export default User;
