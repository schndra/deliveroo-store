import {
  Box,
  Button,
  Fab,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import HotFood from "../assets/food.png";
import { useTheme } from "@emotion/react";

const MenuHeader = () => {
  const theme = useTheme();
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up("md"));
  const mbBackButton = {
    width: 40,
    height: 40,
    backgroundColor: "white",
    position: "absolute",
    top: "1rem",
    left: "1rem",
    zIndex: 2,
    ":hover": {
      backgroundColor: "white",
    },
    display: {
      sm: "none",
    },
  };

  return (
    <Grid
      container
      sx={{
        px: isDesktopScreen ? 8 : 0,
      }}
    >
      <Grid
        item
        md={12}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Button
          variant="text"
          startIcon={<KeyboardBackspaceIcon color="primary" />}
          disableRipple
          href="/"
          sx={{
            color: "primary",
            textTransform: "none",
            fontSize: "16px",
          }}
        >
          Back
        </Button>
      </Grid>
      {/* IMAGE */}
      <Grid item xs={12} sm={6} md={4} xl={3} sx={{ position: "relative" }}>
        <img
          src={HotFood}
          alt="hot food"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Fab color="primary" aria-label="add" disableRipple sx={mbBackButton}>
          <KeyboardBackspaceIcon color="primary" />
        </Fab>
      </Grid>
      {/* CONTENT */}
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        xl={6}
        sx={{
          px: 1.5,
          py: 1,
        }}
      >
        <Typography
          variant="h1"
          fontSize={"28px"}
          fontWeight={600}
          color={"#2e3333"}
        >
          Tossed - St Martin&apos;s Lane
        </Typography>
        {/* MAIN ITEMS SELLING  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#2e3333",
          }}
        >
          <Typography variant="caption" fontSize={"16px"} fontWeight={400}>
            Chicken
          </Typography>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            fontSize={"16px"}
            fontWeight={400}
          >
            .
          </Typography>
          <Typography variant="caption" fontSize={"16px"} fontWeight={400}>
            Salads
          </Typography>
          <Typography
            variant="caption"
            fontSize={"16px"}
            fontWeight={400}
            display="block"
            gutterBottom
          >
            .
          </Typography>
          <Typography variant="caption" fontSize={"16px"} fontWeight={400}>
            Healthy
          </Typography>
        </Box>
        {/* BASIC DETIALS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 0.6,
            color: "#585c5c",
          }}
        >
          <Typography variant="caption" fontSize={"16px"} fontWeight={400}>
            0.20 miles away
          </Typography>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            fontSize={"16px"}
            fontWeight={400}
          >
            .
          </Typography>
          <Typography variant="caption" fontSize={"16px"} fontWeight={400}>
            Opens at 11:00 on Monday
          </Typography>
          <Typography
            variant="caption"
            fontSize={"16px"}
            fontWeight={400}
            display="block"
            gutterBottom
          >
            .
          </Typography>
          <Typography variant="caption" fontSize={"16px"} fontWeight={400}>
            $7.00 minimum
          </Typography>
          <Typography
            variant="caption"
            fontSize={"16px"}
            fontWeight={400}
            display="block"
            gutterBottom
          >
            .
          </Typography>
          <Typography variant="caption" fontSize={"16px"} fontWeight={400}>
            $0.49 delivery
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        xl={3}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        item3
      </Grid>
    </Grid>
  );
};
export default MenuHeader;
