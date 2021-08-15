import React from "react";
import { Formik } from "formik";

const Login = () => (
  <div style={{ color: "white", display: "flex", flexDirection: "column", marginTop: 50 }}>
    <center>
      <h1>Welcome Back!</h1>
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
          alert(JSON.stringify(values, null, 2));
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
        <form onSubmit={handleSubmit} style={{ color: "white",alignSelf: 'center',marginTop: 30 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              placeholder="Email"
              className="mb-3"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              style={{ width: 270 }}
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
              style={{ width: 270 }}
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

export default Login;
