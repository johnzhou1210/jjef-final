import { createSlice } from "@reduxjs/toolkit";

export const userListsSlice = createSlice({
  name: "userLists",
  initialState: {
    lists: [{ id: 0, data: ["entry 1", "entry 2", "entry 3"] }],
    activeListId: 0,
    nextListId: 0,
  },
  reducers: {
    setActiveList: (state, action) => {
      state.activeListId = action.payload; // payload expects a list id
    },

    addList: (state, action) => {},
    removeList: (state, action) => {},

    /* Adds an entry to the list. */
    addEntry: (state, action) => {
      // payload has list id and also the entry to be added.
      const targetList = state.lists.find(
        (obj) => obj.id === action.payload.listId
      ).data;
      targetList.push(action.payload.entry);
    },
    /* removeEntry is not tested yet because entry implementation is not developed enough yet */
    removeEntry: (state, action) => {
      // payload has list id and also the entry id to be removed. Data for entry should include list id and entry id.
      const targetList = state.lists.find(
        (obj) => obj.id === action.payload.listId
      ).data;
      const entryToRemove = targetList.find(
        (entry) => entry.entryId === action.payload.entryId
      );
      const indexToRemove = targetList.indexOf(entryToRemove);
      if (indexToRemove !== -1) {
        targetList.splice(indexToRemove, 1);
      }
    },
  },
});

export const { setActiveList, addList, removeList, addEntry } =
  userListsSlice.actions;
export default userListsSlice.reducer;
