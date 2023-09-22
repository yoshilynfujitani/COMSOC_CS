import React from "react";

const Banner = ({ BannerMessage }) => {
  return (
    <div>
      <div className="">
        <h1>{BannerMessage}</h1>
      </div>
    </div>
  );
};

export default Banner;
