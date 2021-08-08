import React from "react";
import { Paper } from "@material-ui/core";
import useStyles from "./Styles_Form";
import AddressForm from "./AddressForm";

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
