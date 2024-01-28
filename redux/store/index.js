import { configureStore } from '@reduxjs/toolkit'
import sideBarReducer from "../slices/sideBarSlice";


export const store = () => {
  return configureStore({
    reducer: {
        sidebar: sideBarReducer
    }
  })
}