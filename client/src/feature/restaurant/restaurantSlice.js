import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../utils";

const initialState = {
  restaurantItems: [],
  isLoading: false,
  restaurant: null,
};

export const getRestaurantItems = createAsyncThunk(
  "/restaurant/getRestaurantItems",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/restaurants");
      console.log(thunkAPI.getState());

      return resp.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurantItems.pending, (state) => {
        // console.log(state);
        state.isLoading = true;
      })
      .addCase(getRestaurantItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.restaurantItems = action.payload;
      })
      .addCase(getRestaurantItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function

export default restaurantSlice.reducer;
