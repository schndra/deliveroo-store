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
      <Button href="/menu/1" variant="contained">
        Click here to see restaurant menu
      </Button>
    </Box>
  );
};
export default Restaurants;
