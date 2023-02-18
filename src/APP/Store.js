import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import userReducer from "../Features/User/userSlice";
import movieReducer from "../Features/Movie/movieSlice";

// In this version , No need to import getDefaultMiddleware from redux

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },

    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
