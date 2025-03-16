import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { deleteUserFromFeed } from "../store/reducers/feedReducer";
import Loading from "../Pages/Loading";

const Card = ({ currUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,{},{withCredentials:true}
      );
      dispatch(deleteUserFromFeed(userId));
    } catch (error) {
      if (error.status == 401) navigate("/login");
    }
  };

  return (
    (currUser && (
      <div className="flex justify-center ">
        <div className="card bg-base-300 w-[88vw] sm:w-96 shadow-xl">
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
              <span className="italic text-sm text-zinc-600">
                {currUser.gender}
              </span>
            </h2>
            <p>{currUser.bio}</p>
            <div className="card-actions justify-evenly mt-4">
              <button
                onClick={() => handleSendRequest("Ignored", currUser._id)}
                className="btn btn-primary"
              >
                Ignore
              </button>
              <button
                onClick={() => handleSendRequest("Intrested", currUser._id)}
                className="btn btn-secondary"
              >
                Intrested
              </button>
            </div>
          </div>
        </div>
      </div>
    )) || <Loading />
  );
};

export default Card;
