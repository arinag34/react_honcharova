import {configureStore} from "@reduxjs/toolkit";
import PostReducer from "./slices/postSlice.js"
import UserReducer from "./slices/userSlice.js"
import PhotoReducer from "./slices/photoSlice.js"
import CommentReducer from "./slices/commentSlice.js"

export default configureStore({
    reducer: {
        post: PostReducer,
        user: UserReducer,
        comment: CommentReducer,
        photo: PhotoReducer,
    },
});

