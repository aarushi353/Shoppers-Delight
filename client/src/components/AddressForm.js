import React from "react";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { Button, Grid, Typography, Paper } from "@material-ui/core";
import FormInput from "./CustomTextField";
import useStyles from "./Formstyling";

const AddressForm = () => {
  const methods = useForm();
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Shipping Address
          </Typography>
          <FormProvider {...methods}>
            <form onSubmit="">
              <Grid container spacing={3}>
                <FormInput required name="firstName" label="First name" />
                <FormInput required name="lastName" label="Last name" />
                <FormInput required name="address1" label="Address" />
                <FormInput required name="email" label="Email" />
                <FormInput required name="city" label="City" />
                <FormInput required name="zip" label="ZIP / Postal Code" />
              </Grid>
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  component={Link}
                  variant="outlined"
                  to="/cart"
                  style={{ backgroundColor: "white", color: "#dc3545" }}
                >
                  Back to Cart
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "#dc3545", color: "white" }}
                >
                  Next
                </Button>
              </div>
            </form>
          </FormProvider>
        </Paper>
      </main>
    </>
  );
};

export default AddressForm;
