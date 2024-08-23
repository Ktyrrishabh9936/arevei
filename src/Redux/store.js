import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import blogSlice from "./slices/blogSlice";
export const store = configureStore({
        reducer:{
                auth:authSlice,
                blogReducer:blogSlice,
        },
})

export default store;

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch