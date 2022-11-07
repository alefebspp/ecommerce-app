import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
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
    }
  }
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
