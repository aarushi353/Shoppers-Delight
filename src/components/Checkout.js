import React, { useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@material-ui/core";
import useStyles from "./Styles_Form";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
const steps = ["Shipping Address", "Payment details"];

const CheckoutForm = () => {
  const classes = useStyles();


  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
       <AddressForm />
        </Paper>
      </main>
    </>
  );
};

export default CheckoutForm;
