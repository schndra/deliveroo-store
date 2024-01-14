import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box
      sx={{
        maxWidth: "1536px",
        mx: "auto",
      }}
    >
      <Navbar />
      <Outlet />
    </Box>
  );
};
export default Layout;
