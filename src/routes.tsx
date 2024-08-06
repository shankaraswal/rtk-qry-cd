import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Layout } from "./app/Layout";
import SliceMethod from "./pages/SliceMethod";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import CreateApi from "./pages/CreateApi";

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
      path: "/createapi",
      element: <CreateApi />,
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
