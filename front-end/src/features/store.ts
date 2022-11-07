import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './shoppinCart/cartSlice';
import { apiSlice } from './api/apiSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
