import { Box, Button } from "@mui/material";
import { getRestaurantItems } from "../feature/restaurant/restaurantSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Restaurants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantItems());
  }, []);

  // return <Button href="/menu/1">Go To a restaurant</Button>;
  return (
    <Box
      sx={{
        height: "18vh",
        p: 4,
      }}
    >
      <Button
        variant="contained"
        href="/menu/1"
        sx={{
          width: "100%",
          backgroundColor: "#000000e6",
          color: "white",
          py: 2,
          px: 1,
          marginTop: 1,
          marginBottom: 1,
          fontWeight: 500,
          textTransform: "none",
          "&:hover": { backgroundColor: "#000000e6" },
        }}
      >
        Go to restaurant
      </Button>
    </Box>
  );
};
export default Restaurants;
