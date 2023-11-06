import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const getComments = createAsyncThunk("comments/getComments", async () => {
    return fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
        res.json()
    );
})

const commentSlice = createSlice(({
    name: "comment",
    initialState: {
        comments: [],
        loading: false
    },
    extraReducers:{
        [getComments.pending]: (state, action) => {
            state.loading = true
        },
        [getComments.fulfilled]: (state, action) => {
            state.loading = false;
            state.comments = action.payload;
        },
        [getComments.rejected]: (state, action) => {
            state.loading = false;
        },
    }
}))

export default commentSlice.reducer;