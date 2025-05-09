import { createSlice } from "@reduxjs/toolkit";
const PostSlice = createSlice({
    name: 'posts',
    initialState: {
        data: null,
        loading: false,
        error: null,

    },
    reducers: {
        fetchPostsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchPostsSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
        },
        fetchPostsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})
export const {
    fetchPostsStart,
    fetchPostsSuccess,
    fetchPostsFailure } = PostSlice.actions;
export default PostSlice.reducer;