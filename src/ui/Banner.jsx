import React from "react";
import { RiAdminFill } from "react-icons/ri";

const Banner = ({ BannerMessage, type }) => {
  let bannerType;
  switch (type) {
    case "Warning":
      bannerType =
        "bg-yellow-200  px-2 py-2 text-yellow-800  my-2 rounded-md text-sm gap-1 md:px-4  md:space-x-4";
      break;
    case "Danger":
      bannerType =
        "bg-red-200 px-2 py-2 text-red-800  my-2 rounded-md text-sm gap-1 md:px-4  md:space-x-4";
      break;
    case "Reminder":
      bannerType =
        "bg-green-200 px-2 py-2 text-green-800  my-2 rounded-md text-sm gap-1 md:px-4  md:space-x-4";
      break;
  }
  return (
    <div>
      <div className={bannerType}>
        <h1 className="flex items-center gap-2 md:text-lg">
          <RiAdminFill />
          {BannerMessage}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
