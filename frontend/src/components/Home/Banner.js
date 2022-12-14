import React from "react";
import ItemSearch from "./ItemSearch";
import logo from "../../imgs/logo.png";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get </span>
          <ItemSearch />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
