import React from "react";
import Loading from "../../components/Loading/Loading";
import Banner from "./Banner/Banner";
import SearchImages from "./SearchImages/SearchImages";

const Home = () => {
  return (
    <div>
      {/* <Loading/> */}
      <Banner />
      <SearchImages />
    </div>
  );
};

export default Home;
