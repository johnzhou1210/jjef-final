import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    data: null,
  },
  reducers: {
    setData: (state, action) => {
      /* Example of payload json
      {
"list_id": 1,
"date_created": "2023-12-18T02:22:07.098Z",
"createdAt": "2023-12-18T02:22:07.099Z",
"updatedAt": "2023-12-18T02:22:07.099Z",
"entries": [
{
"completed": false,
"text": "",
"priority": 0,
"list_id": 1,
"entry_id": 1,
"color": "white",
"date_created": "2023-12-18T02:24:53.461Z",
"createdAt": "2023-12-18T02:24:53.462Z",
"updatedAt": "2023-12-18T02:24:53.462Z"
}
]
}
      */
      state.data = action.payload; // payload expects a json with the list of listId
      console.log(action.payload);
    },
  },
});

export const { setData } = listSlice.actions;
export default listSlice.reducer;
