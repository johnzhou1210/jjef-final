import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    data : []
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload; // payload expects a json with all lists (result of getAllEntries)
      console.log(action.payload)
    },
  },
});

export const { setData } =
  listSlice.actions;
export default listSlice.reducer;
