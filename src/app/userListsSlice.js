import { createSlice } from "@reduxjs/toolkit";

export const userListsSlice = createSlice({
    name: 'userLists',
    initialState: {
        lists: [],
        activeList: null,
    },
    reducers: {
        setActiveList : (state, action) => {
            
        },
        addList : (state, action) => {
            
        },
        removeList : (state, action) => {

        },
        
    }

})