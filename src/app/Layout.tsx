import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row gap-5 justify-center py-3  bg-red-700 text-white w-full">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-200 font-bold" : "text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/slices"
          className={({ isActive }) =>
            isActive ? "text-yellow-200 font-bold" : "text-white"
          }
        >
          Slices
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "text-yellow-200 font-bold" : "text-white"
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-yellow-200 font-bold" : "text-white"
          }
        >
          Products
        </NavLink>
      </div>
      <div className="w-5/6   max-w-[1440px] py-10 flex flex-col items-center justify-center bg-neutral-100 px-10">
        <Outlet />
      </div>
    </div>
  );
};
