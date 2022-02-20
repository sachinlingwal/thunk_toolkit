import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "red" : "black",
      borderBottom: isActive ? "3px solid black" : "",
    };
  };
  return (
    <nav>
      <h1>redux async thunk</h1>

      <NavLink style={navLinkStyle} to="/">
        Posts
      </NavLink>
      <NavLink style={navLinkStyle} to="comments">
        Comments
      </NavLink>
    </nav>
  );
};

export default Header;
