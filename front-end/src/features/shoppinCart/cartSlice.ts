import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { Action } from '@remix-run/router';
import { Product } from '../../types/types';

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string | undefined>) => {
      state.cart.map(order => {
        order._id == action.payload
          ? state.cart.splice(state.cart.indexOf(order), 1)
          : '';
      });
    }
  }
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
