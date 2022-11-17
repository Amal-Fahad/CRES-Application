import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const initialState = {
  data,
};

const DetailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    ADD_DATA: (state, action) => {
      state.data.push(action.payload);
    },
    DELETE_DATA: (state, action) => {
        state.data = action.payload;
    },
  },
});

export const { ADD_DATA, DELETE_DATA } = DetailsSlice.actions;

export default DetailsSlice.reducer;
