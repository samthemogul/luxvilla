import { configureStore } from '@reduxjs/toolkit'
import sideBarReducer from "../slices/sideBarSlice";
import sidePopupReducer from "../slices/sidePopupSlice";
import centerPopupReducer from "../slices/centerPopupSlice";


export const store = () => {
  return configureStore({
    reducer: {
        sidebar: sideBarReducer,
        sidepopup: sidePopupReducer,
        centerpopup: centerPopupReducer,
    }
  })
}