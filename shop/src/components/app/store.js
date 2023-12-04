import { configureStore ,getDefaultMiddleware} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import HomeReducer from "../Home/HomeSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer:{
    home:HomeReducer,
    middleware:[thunk]
  }
})