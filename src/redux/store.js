import { configureStore } from '@reduxjs/toolkit'
import authApi from './features/auth/authApi'
import authReducer from './features/auth/authSlice'
import infoApi from './features/info/infoApi'

export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [authApi.reducerPath]: authApi.reducer,
      [infoApi.reducerPath]: infoApi.reducer,
      auth:authReducer
      
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, infoApi.middleware),
    
  })
  // console.log("Redux Store Initial State:", store.getState());

 