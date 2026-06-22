import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  useSettings,
} from "../../context/SettingsContext";

function Navbar() {

  const [menuOpen,
    setMenuOpen] =
    useState(false);

  const {
    settings,
  } = useSettings();

  return (

    <nav className="navbar">

      <div className="navbar-container">

        <Link to="/" className="logo">
          {settings?.logo && (
            <img
              src={settings.logo}
              alt="logo"
              className="navbar-logo"
            />
          )}

          <span>
            {settings?.storeName}
          </span>
        </Link>

        <ul
          className={`nav-links ${menuOpen
              ? "active"
              : ""
            }`}
        >

          <li>
            <Link to="/">
              Home
            </Link>
          </li>

          <li>
            <a href="#about">
              About Us
            </a>
          </li>

          <li>
            <a href="#services">
              Services
            </a>
          </li>

          <li>
            <Link to="/products">
              Products
            </Link>
          </li>

          <li>
            <a href="#contact">
              Contact
            </a>
          </li>

        </ul>

        <div
          className="menu-icon"
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }
        >
          {
            menuOpen
              ? <FaTimes />
              : <FaBars />
          }
        </div>

      </div>

    </nav>

  );
}

export default Navbar;