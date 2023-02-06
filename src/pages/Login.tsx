import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, TextField } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import { login } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      try {
         login(values.email, values.password);
      } catch (e) {}
      navigate("/profile");
    },
  });

  return (
    <Box sx={{ marginLeft: "5%", marginTop: "2%" }}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Grid container rowSpacing={3}>
          <Grid item xs={7}>
            <Typography sx={{ marginBottom: "5px" }}>Email Address</Typography>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Enter Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={7}>
            <Typography sx={{ marginBottom: "5px" }}>Password</Typography>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item xs={7}>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Login;
