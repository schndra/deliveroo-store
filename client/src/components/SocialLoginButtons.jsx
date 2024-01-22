/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Button, Divider, SvgIcon, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export function GoogleIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="48px"
        height="48px"
      >
        <path
          fill="#FFC107"
          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        />
        <path
          fill="#FF3D00"
          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        />
        <path
          fill="#4CAF50"
          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
        />
        <path
          fill="#1976D2"
          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        />
      </svg>
    </SvgIcon>
  );
}

export const SocialLoginButtons = ({ handleRegisterWithEmail }) => {
  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          backgroundColor: "#4c69ba",
          color: "white",
          py: 2,
          px: 1,
          marginTop: 1,
          marginBottom: 1,
          fontWeight: 500,
          textTransform: "none",
          "&:hover": { backgroundColor: "#4c69ba" },
        }}
        startIcon={<FacebookRoundedIcon />}
      >
        Continue with Facebook
      </Button>
      <Button
        variant="outlined"
        disableRipple
        sx={{
          width: "100%",
          backgroundColor: "white",
          color: "black",
          py: 2,
          px: 1,
          marginTop: 1,
          marginBottom: 1,
          fontWeight: 500,
          border: "1px solid",
          borderColor: "secondary.200",
          textTransform: "none",
          "&:hover": { backgroundColor: "white", borderColor: "secondary.200" },
        }}
        startIcon={<GoogleIcon />}
      >
        Continue with Google
      </Button>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          backgroundColor: "#000000e6",
          color: "white",
          py: 2,
          px: 1,
          marginTop: 1,
          marginBottom: 1,
          fontWeight: 500,
          textTransform: "none",
          "&:hover": { backgroundColor: "#000000e6" },
        }}
        startIcon={<AppleIcon />}
      >
        Continue with Apple
      </Button>
      <Divider>or</Divider>

      {/* with email */}
      <Button
        variant="contained"
        sx={{
          width: "100%",
          backgroundColor: "primary.main",
          color: "white",
          py: 2,
          px: 1,
          marginTop: 1,
          marginBottom: 1,
          fontWeight: 500,
          textTransform: "none",
          "&:hover": { backgroundColor: "primary.light" },
        }}
        startIcon={<MailOutlineIcon />}
        onClick={handleRegisterWithEmail}
      >
        Continue with Email
      </Button>
      <Typography sx={{ mt: "1rem", fontSize: "13px", color: "secondary.300" }}>
        By continuing you agree to our{" "}
        <Link href="#" underline="always" sx={{ color: "primary.main" }}>
          T&Cs
        </Link>
        . Please also check out our{" "}
        <Link href="#" underline="always" sx={{ color: "primary.main" }}>
          Privacy Policy
        </Link>
        . We use your data to offer you a personalized experience and to better
        understand and improve our services.{" "}
        <Link href="#" underline="always" sx={{ color: "#00ccbc" }}>
          For more information see here
        </Link>
        .
      </Typography>
    </Box>
  );
};
