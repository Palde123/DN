import { all } from "redux-saga/effects";
import PostsSaga from "./PostsSaga";

export default function* RootSaga() {
    yield all([PostsSaga()]);
} 