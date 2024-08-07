import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Layout } from "./app/Layout";
import HomePage from "./pages/HomePage";
import SliceMethod from "./pages/SliceMethod";
import PageNotFound from "./pages/PageNotFound";

import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";

import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

const routeConfig = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    ,
    {
      path: "/slices",
      element: <SliceMethod />,
    },
    {
      path: "/users",
      element: <UserList />,
    },
    {
      path: "/userdetail/:uid",
      element: <UserDetail />,
    },
    {
      path: "/products",
      element: <ProductList />,
    },
    {
      path: "/productdetail/:pid",
      element: <ProductDetail />,
    },
  ],
};

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        {routeConfig.children.map(
          (route, index) =>
            route && (
              <Route key={index} path={route.path} element={route.element} />
            )
        )}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </>
  )
);
