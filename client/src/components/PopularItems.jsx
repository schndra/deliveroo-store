/* eslint-disable no-unused-vars */
import { Box, Typography } from "@mui/material";

const PopularItems = ({ pupularItems }) => {
  return (
    <Box
      sx={{
        mt: "2rem",
        ml: {
          lg: "4rem",
        },
        top: "10rem",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "22px", fontWeight: "700", mb: "1rem" }}
      >
        PopularItems
      </Typography>
    </Box>
  );
};
export default PopularItems;
