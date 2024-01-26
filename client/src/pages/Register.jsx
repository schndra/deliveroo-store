import { useSelector, useDispatch } from "react-redux";
/* eslint-disable no-unused-vars */
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { SocialLoginButtons } from "../components/SocialLoginButtons";
import { loginUser, registerUser } from "../feature/user/userSlice";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  password: "",
  isRegisterWithEmail: false,
  isMember: true,
};

const Register = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(user, "x");
  const [values, setValues] = useState(initialState);
  const [isValidEmail, setIsValidEmail] = useState(false);

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

  const submit = async (e) => {
    e.preventDefault();
    const { isMember, name, email, password, isRegisterWithEmail } = values;

    if ((!isMember && !name) || !password) {
      toast.error("Please fill all fields");
      return;
    }
    if (isRegisterWithEmail && isMember) {
      //log in user
      console.log("log in");
      dispatch(loginUser({ email, password }));
      return;
    }

    dispatch(registerUser({ email, password, name }));
    setValues(initialState);
    // navigate("/register");
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
        {values.isRegisterWithEmail && !values.isMember
          ? "Sign up"
          : values.isRegisterWithEmail && values.isMember
          ? "Log In"
          : "Sign up or log in"}
      </Typography>
      {values.isRegisterWithEmail && !values.isMember && (
        <TextField
          id="name"
          label="name"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          onChange={handleChange}
        />
      )}
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
      {values.isRegisterWithEmail && (
        <Box sx={{ textAlign: "right" }}>
          <Typography variant="caption" gutterBottom color={"secondary.300"}>
            {values.isRegisterWithEmail && values.isMember
              ? " Do not have an account yet?"
              : "already Have an account ?"}
          </Typography>
          <Button
            variant="text"
            sx={{
              textTransform: "capitalize",
              fontSize: "12px",
            }}
            onClick={() => setValues({ ...values, isMember: !values.isMember })}
          >
            {values.isRegisterWithEmail && values.isMember
              ? "Register"
              : "Log In"}
          </Button>
        </Box>
      )}

      {!values.isRegisterWithEmail && (
        <SocialLoginButtons handleRegisterWithEmail={handleRegisterWithEmail} />
      )}
    </Container>
  );
};

export default Register;
