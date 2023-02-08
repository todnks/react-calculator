import { createSlice } from '@reduxjs/toolkit';

const list = createSlice({
  name: 'listUp',
  initialState: [],
  reducers: {
    create: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { create } = list.actions;
export default list.reducer;
