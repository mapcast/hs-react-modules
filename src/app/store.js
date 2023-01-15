import { configureStore } from '@reduxjs/toolkit';
import bodyDataReducer from './slices/bodyDataSlice';
import fieldReducer from './slices/fieldSlice';

export const store = configureStore({
  reducer: {
    bodyDatas: bodyDataReducer,
    fields: fieldReducer
  },
});


