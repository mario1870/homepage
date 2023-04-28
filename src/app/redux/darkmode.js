"use client"
import { createSlice } from '@reduxjs/toolkit';

const dark_or_whitemodeSlice = createSlice({
  name: 'dark_or_whitemode',

  initialState: {
    value: "white",
  },
  
  reducers: {
    set_dark: state => {
      state.value = "dark";
    },
    set_white: state => {
      state.value = "white";
    },
  },
});

export const { set_dark, set_white } = dark_or_whitemodeSlice.actions;

export default dark_or_whitemodeSlice.reducer;