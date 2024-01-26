import { useSelector, useDispatch } from "react-redux";
/* eslint-disable no-unused-vars */
import { Button, Container, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { SocialLoginButtons } from "../components/SocialLoginButtons";
import { loginUser } from "../feature/user/userSlice";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isRegisterWithEmail: false,
};

const Register = () => {
  const { isLoading, user } = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // console.log(user, "x");
  const [values, setValues] = useState(initialState);
  const [isValidEmail, setIsValidEmail] = useState(false);

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  // }, [user, navigate]);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleChange = (e) => {
    // console.log(e.target["id"]);
    // console.log(e.target.value);
    setValues({ ...values, [e.target.id]: e.target.value });
    if (e.target["id"] === "email") {
      setIsValidEmail(validateEmail(e.target.value));
    }
    // console.log(values);
  };

  const handleRegisterWithEmail = () => {
    setValues({ ...values, isRegisterWithEmail: true });
  };

  const submit = (e) => {
    e.preventDefault();
    const { name, email, password, isRegisterWithEmail } = values;

    if (isRegisterWithEmail) {
      dispatch(loginUser({ email, password }));
      return;
    }
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
          type="password"
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
              backgroundColor: "primary.light",
            },
          }}
          type="submit"
          onClick={submit}
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
