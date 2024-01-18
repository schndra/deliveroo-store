import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useState } from "react";
import { DeliverooLogoIcon } from "./Navbar";
import CloseIcon from "@mui/icons-material/Close";

export default function RightSidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(open);

    // setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 280 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          disablePadding
          sx={{
            pb: 0.8,
          }}
        >
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <DeliverooLogoIcon />
            </ListItemIcon>
            <ListItemText
              primary="Deliveroo"
              primaryTypographyProps={{
                fontSize: 20,
                fontWeight: "medium",
                letterSpacing: 0,
                color: "primary.main",
              }}
            />
            <ListItemIcon>
              <CloseIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider
        sx={{
          mb: 2,
        }}
      />

      <ListItem
        disablePadding
        sx={{
          px: 2,
        }}
      >
        <ListItemButton
          component="a"
          href="/login"
          sx={{
            textAlign: "center",
            backgroundColor: "primary.main",
            color: "white",
            borderRadius: "0.325rem",
            ":hover": {
              backgroundColor: "#00c2b3",
            },
          }}
        >
          <ListItemText
            primary="Sign up or log in"
            primaryTypographyProps={{
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: 0,
              color: "white",
            }}
          />
        </ListItemButton>
      </ListItem>
    </Box>
  );

  return (
    <>
      <Button
        variant="outlined"
        onClick={toggleDrawer("right", "true")}
        startIcon={<PersonOutlineIcon color="primary" />}
        sx={{
          color: "black",
          textTransform: "capitalize",
          border: "1px solid",
          borderColor: "secondary.100",
          ":hover": {
            bgcolor: "white",
            borderColor: "secondary.200",
          },
        }}
      >
        Account
      </Button>
      <Drawer
        anchor={"right"}
        open={isDrawerOpen}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </>
  );
}
