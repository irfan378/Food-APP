import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface cartState {
  products: [];
  quantity: number;
  total: number;
}

const initialState = { products: [], total: 0, quantity: 0 } as cartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (
      state: { products: any[]; total: number; quantity: number },
      action: PayloadAction<any>
    ) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state: { products: any[]; total: number,quantity:number }) => {
      state.products=[];
      state.quantity = 0;
      state.total =0;
    },
  },
});
export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
