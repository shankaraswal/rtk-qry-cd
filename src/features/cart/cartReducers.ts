import { createReducer } from "@reduxjs/toolkit";
import { loadCart, addItem, removeItem } from "./cartActions";

const initialState = {
  items: [],
  status: "idle",
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCart, (state, action) => {
      state.items = action.payload;
      state.status = "loaded";
    })
    .addCase(addItem, (state, action) => {
      state.items.push(action.payload);
      state.status = "loaded";
    })
    .addCase(removeItem, (state, action) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload.productId
      );
    });
});

export default cartReducer;
