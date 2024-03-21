import { createSlice } from "@reduxjs/toolkit";

const centerPopupSlice = createSlice({
  name: "centerpopup",
  initialState: { display: false, content: {
    completeProfilePopup: false,
  } },
  reducers: {
    hide(state) {
        state.display = false
        for (const keys in Object.keys(state.content)) {
            if(state.content[Object.keys(state.content)[keys]]){
                state.content[Object.keys(state.content)[keys]]=false;
            }
        }
    },
    show(state, action) {
        state.display = true
        if(action.payload.completeProfilePopup == true){
            state.content.completeProfilePopup = !state.content.completeProfilePopup
        }
    },
  },
});

export const centerPopupActions = centerPopupSlice.actions;

export default centerPopupSlice.reducer;
