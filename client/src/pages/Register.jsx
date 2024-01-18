/* eslint-disable no-unused-vars */
import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { SocialLoginButtons } from "../components/SocialLoginButtons";

const initialState = {
  name: "",
  email: "",
  password: "",
  isRegisterWithEmail: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleChange = (e) => {
    console.log(e.target["id"]);
    console.log(e.target.value);
    setValues({ ...values, [e.target.id]: e.target.value });
    if (e.target["id"] === "email") {
      setIsValidEmail(validateEmail(e.target.value));
    }
    console.log(values);
  };

  const handleRegisterWithEmail = () => {
    setValues({ ...values, isRegisterWithEmail: true });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        my: 8,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        component="h1"
        sx={{ mt: 2, mb: 2, fontSize: "20px", fontWeight: "600" }}
      >
        Sign up or log in
      </Typography>
      {values.isRegisterWithEmail && (
        <TextField
          id="email"
          label="email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          onChange={handleChange}
        />
      )}
      {values.isRegisterWithEmail && (
        <TextField
          id="password"
          label="password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          onChange={handleChange}
        />
      )}
      {values.isRegisterWithEmail && (
        <Button
          variant="contained"
          disabled={!isValidEmail}
          sx={{
            py: 2,
            px: 1,
            marginTop: 1,
            marginBottom: 1,
            fontWeight: 500,
            ":hover": {
              backgroundColor: "#00c2b3",
            },
          }}
        >
          continue
        </Button>
      )}
      {values.isRegisterWithEmail && (
        <Button
          variant="outlined"
          sx={{
            color: "primary.main",
            textTransform: "capitalize",
            border: "1px solid",
            py: 2,
            px: 1,
            marginTop: 1,
            marginBottom: 1,
            borderColor: "secondary.100",
            ":hover": {
              bgcolor: "white",
              borderColor: "secondary.200",
            },
          }}
        >
          Forgot password?
        </Button>
      )}
      {!values.isRegisterWithEmail && (
        <SocialLoginButtons handleRegisterWithEmail={handleRegisterWithEmail} />
      )}
    </Container>
  );
};

export default Register;
