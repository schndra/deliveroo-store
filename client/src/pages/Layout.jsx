import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { Box } from "@mui/material";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <Box
      sx={{
        maxWidth: "1536px",
        mx: "auto",
        my: 0,
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};
export default Layout;
