import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#00b8a9",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2e3333",
      light: "#585c5c",
      dark: "#4d7c1b", //green lol
      contrastText: "#fff",
      //button border colors
      100: "#e8ebeb",
      200: "#d1d4d4",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ["IBM Plex Sans", "sans-serif"].join(","),
  },
});

export default theme;
