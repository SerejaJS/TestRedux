import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {  reducer as favoritesReducer } from "./favorites/favorites.slise";
// import { userSlice } from "./user/user.slice";
import { api } from "./api/api";


const reducers = combineReducers({
    favorites: favoritesReducer,
    [api.reducerPath] : api.reducer,
    // user : userSlice.reducer,
})



export const store = configureStore({
    reducer: reducers, 
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
          .prepend(api.middleware)
          .concat(api.middleware)
})