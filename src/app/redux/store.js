"use client"
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import hamburgerReducer from "./hamburgerSlice"
import dark_or_whitemodeReducer from "./darkmode"

export const store = configureStore({
  reducer: {
    language: languageReducer,
    hamburger: hamburgerReducer,
    dark_or_whitemode: dark_or_whitemodeReducer,
  },
});


