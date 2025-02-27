import React, { useContext } from "react";
import Profile from "./Profile";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: theme === "light" ? "black" : "white",
        color: theme === "light" ? "white" : "black",
        width: "90%",
        height: "10vh",
        // marginTop: "50px",
        paddingTop: "0 20px",
        borderRadius: "5px",
        border: "1px solid #fff",
      }}
    >
      <h1> LOGO </h1>
      <Profile />
      <button onClick={toggleTheme}>{theme}</button>
    </nav>
  );
};

export default Navbar;
