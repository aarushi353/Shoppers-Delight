import React from "react";
import { Formik } from "formik";

const Signup = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      marginTop: 50,
      color: "#dc3545",
    }}
  >
    <center>
      <h1 className="para">Create Account</h1>
    </center>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
          onSubmit={handleSubmit}
          style={{ color: "white", alignSelf: "center", marginTop: 30 }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              placeholder="First Name"
              className="mb-3"
              type="text"
              name="name"
              style={{ width: 270, backgroundColor: "white" }}
              required
            />
            <input
              placeholder="Last Name"
              className="mb-3"
              type="text"
              name="name"
              style={{ width: 270, backgroundColor: "white" }}
              required
            />
            <input
              placeholder="Email"
              className="mb-3"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              style={{ width: 270, backgroundColor: "white" }}
              required
            />
            {errors.email && touched.email && errors.email}
            <input
              placeholder="Password"
              className="mb-3"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              required
              style={{ width: 270, backgroundColor: "white" }}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting} className="button">
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default Signup;
