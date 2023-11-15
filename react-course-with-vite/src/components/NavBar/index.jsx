import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export const NavBar = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-xl">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory()}
            to="/"
            style={({ isActive }) => {
              return {
                textDecorationLine: isActive ? "underline" : "",
                color: isActive ? "black" : "black",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => context.setSearchByCategory("clothes")}
            style={({ isActive }) => {
              return {
                textDecorationLine: isActive ? "underline" : "",
                color: isActive ? "black" : "black",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            style={({ isActive }) => {
              return {
                textDecorationLine: isActive ? "underline" : "",
                color: isActive ? "black" : "black",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            onClick={() => context.setSearchByCategory("furnitures")}
            style={({ isActive }) => {
              return {
                textDecorationLine: isActive ? "underline" : "",
                color: isActive ? "black" : "black",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => context.setSearchByCategory("toys")}
            style={({ isActive }) => {
              return {
                textDecorationLine: isActive ? "underline" : "",
                color: isActive ? "black" : "black",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => context.setSearchByCategory("others")}
            style={({ isActive }) => {
              return {
                textDecorationLine: isActive ? "underline" : "",
                color: isActive ? "black" : "black",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="underline font-medium text-gray-400">
          chavezmataricardo@gmail.com
        </li>
        <li>
          <NavLink
            to="/my-orders"
            style={({ isActive }) => {
              return {
                textDecorationLine: isActive ? "underline" : "",
                color: isActive ? "black" : "black",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            style={({ isActive }) => {
              return {
                textDecorationLine: isActive ? "underline" : "",
                color: isActive ? "black" : "black",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            My account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            style={({ isActive }) => {
              return {
                textDecorationLine: isActive ? "underline" : "",
                color: isActive ? "black" : "black",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            Sign in
          </NavLink>
        </li>
        <li className="flex">
          <ShoppingCartIcon className="w-5 h-5"></ShoppingCartIcon>
          <span className="font-semibold pl-2">{context.cartProducts.length}</span>
        </li>
      </ul>
    </nav>
  );
};
