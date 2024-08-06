import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="flex flex-row gap-5 justify-center py-3 bg-red-700 text-white text-xl w-full">
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
    </nav>
  );
}

export default Header;
