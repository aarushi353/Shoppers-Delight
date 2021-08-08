import React from "react";
import { Paper } from "@material-ui/core";
import useStyles from "./Styles_Form";
const PaymentForm = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}></Paper>
      </main>
    </>
  );
};

export default PaymentForm;
