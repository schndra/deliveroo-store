import { useLocation } from "react-router-dom";
// import Logo from "../assets/Logo.png";
import { Box, Button, Link, SvgIcon } from "@mui/material";
import RightSidebar from "./RightSidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Search from "./Search";

function DeliverooLogoIcon(props) {
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
function ShoppingCart(props) {
  return (
    <SvgIcon {...props}>
      <svg height="24" width="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M14 15V13H10V15H14ZM15 15H19.1872L19.7172 13H15V15ZM14 12V10H15V12H19.9822L20.5122 10H3.48783L4.01783 12H9V10H10V12H14ZM14 18V16H10V18H14ZM15 18H18.3922L18.9222 16H15V18ZM9 15V13H4.28283L4.81283 15H9ZM9 18V16H5.07783L5.60783 18H9ZM7 8V3H17V8H23L20 20H4L1 8H7ZM9 8H15V5H9V8Z"
          fill="#00CCBC"
        ></path>
      </svg>
    </SvgIcon>
  );
}

const Navbar = () => {
  let { pathname } = useLocation();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: "1rem", lg: "4rem" },
        py: 2,
        gap: 4,
        borderBottom: 1,
        borderColor: "secondary.200",
        position: "sticky",
        top: 0,
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 3,
          alignItems: "center",
          flexGrow: "1",
        }}
      >
        {/* LOGO  */}
        <Link href="/">
          <Button
            // variant="outlined"
            disableRipple
            size="large"
            startIcon={<DeliverooLogoIcon color="primary" />}
            sx={{
              textTransform: "lowercase",
              ":hover": {
                bgcolor: "white",
              },
            }}
          >
            deliveroo
          </Button>
        </Link>

        {/* SEARCH */}
        {pathname !== "/login" && <Search />}
      </Box>

      <Box sx={{ display: "flex", gap: "1rem" }}>
        {/* CART */}
        {pathname !== "/login" && (
          <Button
            variant="outlined"
            disableRipple
            startIcon={<ShoppingCart color="primary" />}
            sx={{
              color: "black",
              textTransform: "capitalize",
              border: "1px solid",
              borderColor: "secondary.100",
              ":hover": {
                bgcolor: "white",
                borderColor: "secondary.200",
              },
              display: { xs: "none", lg: "flex" },
            }}
          >
            $14.00
          </Button>
        )}

        {/* SINGUP OR LOG IN  */}
        <Button
          variant="outlined"
          disableRipple
          startIcon={<HomeOutlinedIcon color="primary" />}
          href="/login"
          sx={{
            color: "black",
            textTransform: "capitalize",
            border: "1px solid",
            borderColor: "secondary.100",
            ":hover": {
              bgcolor: "white",
              borderColor: "secondary.200",
            },
            display: { xs: "none", md: "flex" },
          }}
        >
          Sign up or log in
        </Button>
        {/* ACCOUNT */}
        <RightSidebar />
      </Box>
    </Box>
  );
};

export default Navbar;
