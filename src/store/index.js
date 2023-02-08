import { configureStore } from '@reduxjs/toolkit';
import listSlice from '../feature/list/listSlice';
const store = configureStore({
  reducer: { listSlice },
});

export default store;
