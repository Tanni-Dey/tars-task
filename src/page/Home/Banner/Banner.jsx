import React, { createContext, useContext } from "react";
import "./Banner.css";
import search from "../../../images/search_icon.svg";
import { AppContext } from "../../../App";

// export const AppContext = createContext();

const Banner = () => {
  let [searchText, setSearchText] = useContext(AppContext);
  // let searchText = "all";
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setSearchText(e.target.search.value);
  //   // console.log(searchText);
  // };

  return (
    <div className="banner">
      <div className="container">
        <h2 className="tars_tittle">
          Download High Quality Images by creators
        </h2>
        <p className="tars_subtittle">
          Over 2.4 million+ stock Images by our talented community
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearchText(e.target.search.value);
          }}
          className="d-flex tars_search_form mw-100 justify-content-center"
          role="search"
        >
          <img
            className="tars_search_icon tars_banner_search_icon"
            src={search}
            alt="search"
          />
          <input
            className="form-control me-2 tars_searchbar tars_banner_searchbar"
            name="search"
            type="search"
            placeholder="Search high resolution Images, categories, wallpapers"
            aria-label="Search"
          />
          {/* <button className="btn btn-outline-success" type="submit">
            Search
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Banner;
