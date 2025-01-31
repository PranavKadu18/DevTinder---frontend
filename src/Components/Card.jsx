import React from "react";

const Card = ({ currUser }) => {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-300 w-96 shadow-xl">
        <figure className="w-full h-56 overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={currUser.profilePhoto}
            alt="Shoes"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">
            {currUser.firstName} {currUser.lastName} ({currUser.age}){" "}
            <span className="italic text-sm text-zinc-600">{currUser.gender}</span>
          </h2>
          <p>{currUser.bio}</p>
          <div className="card-actions justify-evenly mt-4">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Intrested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
