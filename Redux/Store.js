import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
import RootReducer from "./Reducers/RootReducer";
import RootSaga from "./Saga/RootSaga";

const sagaMiddleware = require('./Middleware');
const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: false
    }).concat(sagaMiddleware)
});
sagaMiddleware.run(RootSaga);
export default store;