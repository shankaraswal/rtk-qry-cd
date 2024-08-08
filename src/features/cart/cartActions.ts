import { createAction } from "@reduxjs/toolkit";
import { ProductType } from "../products/productService";

export const addItem = createAction<ProductType>("cart/addItem");
export const removeItem = createAction<string | number>("cart/removeItem");
