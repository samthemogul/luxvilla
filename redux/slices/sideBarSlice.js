import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState: { display: false, content: {
    regularSidebar: false,
    DashboardSideBar: false,
    searchboxSidebar: false
  } },
  reducers: {
    toggleSidebar: (state) => ({ ...state, display: !state.display }),
    show(state, action) {
        if(action.payload.regularSidebar == true){
            state.content.regularSidebar = !state.content.regularSidebar
        }
        if(action.payload.DashboardSideBar == true){
            state.content.DashboardSideBar = !state.content.DashboardSideBar
        }
        if(action.payload.searchboxSidebar == true){
            state.content.searchboxSidebar = !state.content.searchboxSidebar
        }
    },
    hide(state) {
        for (const keys in Object.keys(state.content)) {
            if(state.content[Object.keys(state.content)[keys]]){
                state.content[Object.keys(state.content)[keys]]=false;
            }
        }
    }
  },
});

export const sideBarActions = sideBarSlice.actions;

export default sideBarSlice.reducer;
