// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import credentialsReducer from './slices/credentialsSlice'

export const store = configureStore({
  reducer: {
    credentials: credentialsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
