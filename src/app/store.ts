import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
import { userService } from "../features/users/userService";
import { productService } from "../features/products/productService";
import { categoryService } from "../features/categories/categoryService";

export const store = configureStore({
  reducer: {
    [userService.reducerPath]: userService.reducer,
    [categoryService.reducerPath]: categoryService.reducer,
    [productService.reducerPath]: productService.reducer,
    counterState: counterReducer,
    todoState: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userService.middleware,
      productService.middleware,
      categoryService.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
