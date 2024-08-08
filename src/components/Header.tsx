import { NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";
import Cart from "./Cart";
import { useState } from "react";

function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className=" bg-red-700 w-full">
      <nav className="flex flex-row gap-5 justify-center py-3 text-white text-xl relative m-auto w-[1440px]">
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
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-yellow-200 font-bold" : "text-white"
          }
        >
          Cart
        </NavLink>

        <div
          className="z-50 absolute top-0 flex flex-row text-white right-0 bg-neutral-600 rounded-t-lg w-32 cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
        >
          <span className="flex items-center justify-end w-14">cart</span>
          <span className="pt-2">
            <CartIcon />
          </span>
        </div>
        {cartOpen && (
          <>
            <div
              className="z-30  fixed top-0 right-0 w-full h-full bg-neutral-600 opacity-50"
              onClick={() => setCartOpen(false)}
            ></div>
            <div className="z-50 absolute bg-neutral-600 py-5 border border-neutral-600 right-0 w-[400px] top-[52px] rounded-b-2xl">
              <Cart />
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
