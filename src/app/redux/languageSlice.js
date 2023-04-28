"use client"
import { createSlice } from '@reduxjs/toolkit';

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