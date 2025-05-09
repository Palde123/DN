import { call, put, takeLatest } from "redux-saga/effects";
import Api from "../APIs/Api";
import { fetchPostsFailure, fetchPostsStart, fetchPostsSuccess } from "../Slices/PostSlice";

function* fetchPostsSaga() {
    try {
        const response = yield call(Api.get, '/getRestaurantList');
        yield put(fetchPostsSuccess(response.data))

    } catch (error) {
        yield put(fetchPostsFailure(error.message))
    }

}
export default function* PostsSaga() {
    yield takeLatest(fetchPostsStart.type, fetchPostsSaga)
}