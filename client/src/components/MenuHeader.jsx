/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Fab,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import HotFood from "../assets/food.png";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ buttonInfo }) => {
  // console.log(buttonInfo.title);
  const { title, icon, subTitle, id } = buttonInfo;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        startIcon={icon}
        endIcon={
          <ArrowForwardIosIcon
            sx={{
              flex: 1,
            }}
          />
        }
        sx={{
          width: {
            xs: "100%",
            sm: "inherit",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // width: "100%",
            flex: 2,
          }}
        >
          <Typography
            variant="caption"
            fontSize={"16px"}
            sx={{
              textAlign: "left",
              color: id === "review" ? "secondary.dark" : "secondary.main",
              textTransform: "none",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="caption"
            fontSize={"14px"}
            sx={{
              textAlign: "left",
              color: "secondary.300",
              textTransform: "none",
            }}
          >
            {subTitle}
          </Typography>
        </Box>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

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
            color: "secondary.300",
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
        {/* info modal */}
        <BasicModal
          buttonInfo={{
            id: "info",
            title: "Info",
            subTitle: " Map, allegens and hygiene rating",
            icon: <InfoOutlinedIcon sx={{ flex: 1, color: "secondary.300" }} />,
          }}
        />
        {/* review modal */}
        <BasicModal
          buttonInfo={{
            id: "review",
            title: "4.8 Excellent",
            subTitle: "See all 500 reviews",
            icon: <StarIcon sx={{ flex: 1, color: "secondary.dark" }} />,
          }}
        />
        {/* <BasicModal /> */}
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
