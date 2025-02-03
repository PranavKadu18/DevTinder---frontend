import React from "react";
import { Link } from "react-router-dom";

const ConnectionsCard = ({ data,idx }) => {
  return (
    <Link
      to={`/connections/details/${idx}`}
      className="w-[100%] h-[20%] bg-base-300 my-2 p-4 rounded-lg flex gap-4 items-center hover:scale-105 duration-300"
    >
      <img
        className="w-[10%] h-full object-cover rounded-full"
        src={data.profilePhoto}
        alt=""
      />

      <h1>
        {data.firstName} {data.lastName}
      </h1>
    </Link>
  );
};

export default ConnectionsCard;
