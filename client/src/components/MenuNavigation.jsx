import { AppBar, Box, Button, Toolbar } from "@mui/material";

const navItems = [
  { link: "#", text: "New Daily Specials" },
  { link: "#", text: "Salads" },
  { link: "#", text: "Hot Power Bowls" },
  { link: "#", text: "Gym food" },
  { link: "#", text: "Rainbow Wraps" },
  { link: "#", text: "Vegain Menu" },
  { link: "#", text: "Snacks & fruit" },
  { link: "#", text: "Cold Drinks" },
  { link: "#", text: "Smoothies, shakes & juice" },
];

const MenuNavigation = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        top: "4.8rem",
      }}
    >
      <Toolbar>
        <Box>
          {navItems.map((item, index) => {
            const { text } = item;

            return (
              <Button
                disableRipple
                key={index}
                sx={{
                  color: "primary.main",
                  textTransform: "none",
                  ":hover": {
                    backgroundColor: "white",
                    color: "primary.light",
                  },
                }}
              >
                {text}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default MenuNavigation;
