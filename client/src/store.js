import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./feature/restaurant/restaurantSlice";
import userReducer from "./feature/user/userSlice";

export const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    user: userReducer,
  },
});
