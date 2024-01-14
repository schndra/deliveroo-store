import { Link } from "react-router-dom";
// import Logo from "../assets/Logo.png";
import { Box, Button, SvgIcon } from "@mui/material";
import RightSidebar from "./RightSidebar";

function LightBulbIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg
        width="609"
        height="671"
        viewBox="0 0 609 671"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M438.847 0.32863L407.633 295.756L354.389 46.6837L187.455 81.9846L240.674 331.04L0 381.913L42.5094 580.862L465.741 670.313L562.529 454.127L608.591 18.0825L438.83 0.320007L438.847 0.337253V0.32863ZM305.11 428.897C296.384 436.847 284.847 436.114 272.603 432.062C260.385 428.026 254.953 413.325 259.583 395.554C263.032 382.361 279.269 380.378 287.391 380.24C290.478 380.188 293.513 380.809 296.315 382.068C302.058 384.655 311.784 390.173 313.759 398.589C316.604 410.73 313.862 420.921 305.136 428.871H305.119V428.889L305.11 428.897ZM427.638 442.607C421.3 453.558 404.658 455.007 388.284 447.039C377.247 441.659 377.333 427.966 378.54 419.619C379.181 415.067 381.027 410.768 383.886 407.168C387.827 402.202 394.406 395.726 402.011 395.528C414.376 395.2 425.016 400.719 431.026 410.704C437.062 420.654 434.044 431.631 427.689 442.607H427.638Z"
          fill="#00CCBC"
        />
      </svg>
    </SvgIcon>
  );
}

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        my: "1rem",
        justifyContent: "space-between",
        px: "4rem",
      }}
    >
      {/* LOGO  */}
      {/* <DeliverooLogo
        sx={{ mr: 1, verticalAlign: "middle", height:"672px", width: "200px" }}
      /> */}
      <Link to="/">
        <Button
          variant="outlined"
          startIcon={<LightBulbIcon color="primary" />}
          sx={{
            textTransform: "lowercase",
          }}
        >
          deliveroo
        </Button>
      </Link>
      {/* SEARCH */}
      {/* CART */}
      {/* SINGUP OR LOG IN  */}
      {/* ACCOUNT */}
      <RightSidebar />
    </Box>
  );
};

export default Navbar;
