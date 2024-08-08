import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
import { userService } from "../features/users/userService";
import { productService } from "../features/products/productService";
import cartReducer from "../features/cart/cartReducers";

export const store = configureStore({
  reducer: {
    [userService.reducerPath]: userService.reducer,
    [productService.reducerPath]: productService.reducer,
    counterState: counterReducer,
    todoState: todoReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userService.middleware,
      productService.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
