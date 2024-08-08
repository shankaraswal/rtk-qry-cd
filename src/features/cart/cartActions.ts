import { createAction } from "@reduxjs/toolkit";

export const loadCart = createAction("cart/load");
export const addItem = createAction("cart/addItem");
export const removeItem = createAction("cart/removeItem");
