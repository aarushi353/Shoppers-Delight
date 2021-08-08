import React from "react";
import { Alert } from "react-bootstrap";
const Order = () => {
    const items = [ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light',
    'dark', ];
  return (
    <center>
      {items.map((variant, idx) => (
      <Alert key={idx} variant={variant} style={{width: 600}}>
        <table>
          <tr style={{ display: "flex", justifyContent: "space-between" }}>
            <th>Product</th>
            <th>Quantity</th>
          </tr>
          <tr style={{ display: "flex", justifyContent: "space-between" }}>
            <td>Book</td>
            <td>2</td>
            </tr>
            <tr style={{ display: "flex", justifyContent: "space-between" }}>
              <td>Shirts</td>
              <td>4</td>
            </tr>
        </table>
      </Alert>
      ))}
    </center>
  );
};

export default Order;
