import { Stack, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from ".";
import { useState, useEffect } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark-mode");
      setTextColor("white");
    } else {
      body.classList.remove("dark-mode");
      setTextColor("black");
    }
  }, [darkMode]);

  const [textColor, setTextColor] = useState("black");

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="row align-toolbar">
      <div className="col-md-6">
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={45} />
        </Link>
      </div>
      <div className="col-md-6">
        <div className="align-toolbar-template">
          <SearchBar textColor={textColor} />
          <IconButton
            onClick={handleDarkModeToggle}
            color="inherit"
            aria-label="toggle dark mode"
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
