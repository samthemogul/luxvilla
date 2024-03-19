import { createSlice } from "@reduxjs/toolkit";

const sidePopupSlice = createSlice({
  name: "sidepopup",
  initialState: { display: false, content: {
    listingPopup: false,
  } },
  reducers: {
    hide: (state) => {
        state.display = false
        for (const keys in Object.keys(state.content)) {
            if(state.content[Object.keys(state.content)[keys]]){
                state.content[Object.keys(state.content)[keys]]=false;
            }
        }
    },
    show(state, action) {
        state.display = true
        if(action.payload.listingPopup == true){
            state.content.listingPopup = !state.content.listingPopup
        }
    },
  },
});

export const sidePopupActions = sidePopupSlice.actions;

export default sidePopupSlice.reducer;
