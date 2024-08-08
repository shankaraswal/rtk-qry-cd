import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../products/productService";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {
    loadCart: (state, action) => {
      state.items = action.payload;
      state.status = "loaded";
    },
    addItem: (state, action) => {
      (state.items as ProductType[]).push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item: { productId: string }) =>
          item.productId !== action.payload.productId
      );
    },
  },
});

export const { loadCart, addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
