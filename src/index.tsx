import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { routes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <div className="w-full min-h-screen bg-neutral-300">
      <RouterProvider router={routes} />
    </div>
  </Provider>
);
