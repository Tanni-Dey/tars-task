/** @jsxImportSource theme-ui */
import React, { useContext, useState } from "react";
import "./Header.css";
import search from "../../../images/search_icon.svg";
import { useColorMode } from "theme-ui";
import { AppContext } from "../../../App";

const Header = () => {
  const [searchText, setSearchText] = useContext(AppContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg tars_navbar">
        <a className="navbar-brand tars_navbar_text" href="#0">
          Image Gallery
        </a>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearchText(e.target.search.value);
          }}
          className="d-flex tars_search_form"
          role="search"
        >
          <img className="tars_search_icon" src={search} alt="search" />
          <input
            className="form-control me-2 tars_searchbar"
            name="search"
            type="search"
            placeholder="Search Images here"
            aria-label="Search"
          />
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item tars_nav_item">
              <a
                className="nav-link tars_nav_item_link active"
                aria-current="page"
                href="#0"
              >
                Explore
              </a>
            </li>
            <li className="nav-item tars_nav_item">
              <a className="nav-link tars_nav_item_link" href="#0">
                Collection
              </a>
            </li>
            <li className="nav-item tars_nav_item">
              <a className="nav-link tars_nav_item_link" href="#0">
                Community
              </a>
            </li>
            <li className="nav-item tars_nav_item">
              <a
                className="nav-link tars_nav_item_link d-flex align-items-center"
                href="#0"
              >
                <span>Dark Mode</span>
                <button
                  onClick={() => {
                    setIsDarkMode(!isDarkMode);
                    setColorMode(colorMode === "light" ? "dark" : "light");
                  }}
                  className={`tars_dark_mode_btn d-flex align-items-center ${
                    isDarkMode
                      ? "justify-content-end bg-black"
                      : "justify-content-start"
                  }`}
                >
                  <span className="tars_dark_mode_toogler"></span>
                </button>
              </a>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Header;
