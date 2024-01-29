/* eslint-disable no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  Card,
  Typography,
  useMediaQuery,
} from "@mui/material";
// import FolderIcon from "@mui/icons-material/Folder";
// import DeleteIcon from "@mui/icons-material/Delete";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useTheme } from "@emotion/react";

const SingleMenuItem = ({ dishes }) => {
  const theme = useTheme();
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: isDesktopScreen ? "1fr 1fr" : "1fr",
    gap: isDesktopScreen ? "1rem" : 0,
  };

  const cardStyle = {
    p: "1rem",
    ":hover": {
      boxShadow: isDesktopScreen ? 15 : 0,
      cursor: "pointer",
    },
    display: "flex",
    gap: "1rem",
    width: "100%",
    justifyContent: "space-between",
  };

  const secondaryTextStyle = {
    fontSize: "14px",
    fontWeight: 400,
    maxWidth: "200px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    // whiteSpace: "pre-line",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
  };

  return (
    <>
      <Box sx={gridContainerStyle}>
        {dishes.map((dish) => {
          console.log(dish);
          const { name, desc, price, popular, id, kcal, image } = dish;

          return (
            <Card key={id} sx={cardStyle}>
              <Box>
                <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                  {name}
                </Typography>
                <Typography sx={secondaryTextStyle}>{desc}</Typography>
                <Typography
                  sx={{
                    ...secondaryTextStyle,
                  }}
                >
                  {kcal}
                </Typography>
                <Typography sx={secondaryTextStyle}>£{price}</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Avatar
                  variant="rounded"
                  sx={{ height: "100px", width: "100px" }}
                >
                  {/* <FolderIcon /> */}
                  <img src={image} alt={name} />
                </Avatar>

                <Button
                  variant="outlined"
                  disableRipple
                  sx={{
                    px: 1,
                    height: "100px",
                    minWidth: "50px",
                    ml: "10px",
                    textAlign: "center",
                    border: "1px solid",
                    borderColor: "secondary.100",
                    ":hover": {
                      bgcolor: "white",
                      borderColor: "secondary.100",
                    },
                  }}
                >
                  <AddOutlinedIcon
                    sx={{
                      color: "secondary.200",
                    }}
                  />
                </Button>
              </Box>
            </Card>
          );
        })}
      </Box>
    </>
  );
};
export default SingleMenuItem;
