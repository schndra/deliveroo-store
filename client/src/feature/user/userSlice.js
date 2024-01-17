import { createSlice } from "@reduxjs/toolkit";
// import { customFetch } from "../../utils";

const initialState = {
  isLoading: false,
  user: null,
};

// export const getRestaurantItems = createAsyncThunk(
//   "/restaurant/getRestaurantItems",
//   async (_, thunkAPI) => {
//     try {
//       const resp = await customFetch.get("/restaurants");
//       console.log(thunkAPI.getState());

//       return resp.data.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {},
});

// Action creators are generated for each case reducer function

export default userSlice.reducer;
