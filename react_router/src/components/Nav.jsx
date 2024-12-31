import React from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className="flex gap-4 bg-black p-4 text-white">
        <NavLink
          className={(e) => {
            e.isActive ? "bg-red-500" : "";
          }}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={(e) => {
            e.isActive ? "bg-red-500" : "";
          }}
          to={"/About"}
        >
          About
        </NavLink>
        <NavLink
          className={(e) => {
            e.isActive ? "bg-red-500" : "";
          }}
          to={"/Login"}
        >
          Login
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
