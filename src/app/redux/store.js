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



/*import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: "german",
  },
  reducers: {
    set_german: state => {
      state.value = "german";
    },
    set_english: state => {
      state.value = "english";
    },
  },
});

export const { set_german, set_english } = languageSlice.actions;

export default languageSlice.reducer;
*/