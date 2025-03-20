import React from "react";
import { Link } from "react-router-dom";

const ConnectionsCard = ({ data, idx }) => {
  return (
    <div className="w-[95%]  sm:h-[20%] h-[15%] ml-3 bg-[#7d1935] my-2 p-4 rounded-lg flex gap-4 items-center hover:scale-105 duration-300">
      <div className="flex gap-4">
        <img
          className="w-[10%] h-full object-cover rounded-full"
          src={data.profilePhoto}
          alt=""
        />

        <Link to={`/connections/details/${idx}`}>
          <h1 className="hover:text-blue-400">
            {data.firstName} {data.lastName}
          </h1>
        </Link>
      </div>
      <Link to={"/chat/" + data._id}>
        <button className="btn btn-secondary">Chat</button>
      </Link>
    </div>
  );
};

export default ConnectionsCard;
