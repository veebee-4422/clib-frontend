import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import homeReducer from "./slices/home";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer,
  }
})

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;