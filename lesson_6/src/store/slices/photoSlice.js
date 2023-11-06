import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const getPhotos = createAsyncThunk("photos/getPhotos", async () => {
    return fetch("https://jsonplaceholder.typicode.com/photos").then((res) =>
        res.json()
    );
})

const photoSlice = createSlice(({
    name: "photo",
    initialState: {
        photos: [],
        loading: false
    },
    extraReducers:{
        [getPhotos.pending]: (state, action) => {
            state.loading = true
        },
        [getPhotos.fulfilled]: (state, action) => {
            state.loading = false;
            state.photos = action.payload;
        },
        [getPhotos.rejected]: (state, action) => {
            state.loading = false;
        },
    }
}))

export default photoSlice.reducer;