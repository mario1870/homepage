"use client"
import { createSlice } from '@reduxjs/toolkit';

// 

const hamburgerSlice = createSlice({
  name: 'hamburger',

  initialState: {
    value: undefined,
  },
  reducers: {
    setChange: state => {
        if (state.value != undefined){
        state.value = !state.value;        
        }
        else{
            state.value = true;
        }

    },
  },
});

export const { setChange } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;