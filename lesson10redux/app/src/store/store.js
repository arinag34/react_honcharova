import {configureStore} from "@reduxjs/toolkit";
import PostReducer from "./slices/postSlice.js"

export default configureStore({
    reducer: {
        post: PostReducer,
    },
});

