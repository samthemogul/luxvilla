import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
    name: 'sidebar',
    initialState: { display: false},
    reducers: {
        toggleSidebar: (state) => ({ ...state, display: !state.display })
    }
})

export const sideBarActions = sideBarSlice.actions;

export default sideBarSlice.reducer;