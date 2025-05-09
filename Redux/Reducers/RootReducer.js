import { combineReducers } from "@reduxjs/toolkit";
import reducer from "../Slices/PostSlice";

const RootReducer = combineReducers({
    posts: reducer,
})
export default RootReducer;