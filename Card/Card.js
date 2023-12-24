import React from "react";
// import { Link } from "react-router-dom";

const Cards = ({ placeId, photos, address, title, price }) => {
  // const {} = place;
  return (
    // <Link to={`/place/${placeId}`} className="m-4 flex flex-col md:m-2 xl:m-0">
    <div className="h-[410px] w-[327px] sm:h-[500px] sm:w-[435px] md:h-[400px] md:w-[350px] lg:h-[400px] lg:w-[330px] xl:h-[350px] xl:w-[300px]; ">
      {photos?.[0] && (
        <img
          src={`${photos}`}
          alt="No Img"
          className="h-4/5 w-full rounded-xl object-cover"
        />
      )}
      <h2 className="truncate font-bold">{address}</h2>
      <h3 className="truncate text-sm text-gray-500">{title}</h3>
      <div className="mt-1">
        <span className="font-semibold">₹{price} </span>
        per night
      </div>
    </div>
    // </Link>
  );
};

export default Cards;
