import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setRequests, updateRequests } from "../store/reducers/requestsReducer";
import Loading from "./Loading";

const Requests = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleReviewRequest = async (status, _id) => {
    try {
      const res = await axios.patch(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(updateRequests(_id));
    } catch (error) {
      console.log(error);
    }
  };

  const requests = useSelector((state) => state.requests.data);

  const fetchRequest = async () => {
    const res = await axios.get(BASE_URL + "/user/request/received", {
      withCredentials: true,
    });
    dispatch(setRequests(res.data.receivedConnectionReq));
  };

  useEffect(() => {
    try {
      fetchRequest();
    } catch (error) {
      if (error.status == 401) navigate("/login");
    }
  }, []);

  if (requests && requests.length == 0) {
    return (
      <div className="flex justify-center mt-20">
        <h1 className="text-2xl">No Request Yet 🥲</h1>
      </div>
    );
  }

  return (
    (requests && (
      <div className=" sm:w-[40vw] w-full h-[70vh] p-5">
        <div className="w-[100%] h-[10%]">
          <h1 className="mb-4">Received Requests</h1>
        </div>
        <div className="h-[100%] w-[100%] overflow-scroll overflow-x-hidden">
          {requests.map((elem, idx) => {
            const { _id } = elem;
            const { firstName, lastName, profilePhoto } = elem.fromUserId;

            return (
              <div
                key={idx}
                className="sm:w-[100%] sm:h-[20%] bg-base-300 my-2 p-4 rounded-lg flex justify-between items-center"
              >
                <img
                  className="w-[10%] mr-2 sm:mr-0 h-full object-cover rounded-full"
                  src={profilePhoto}
                  alt=""
                />

                <h1 className="text-md">
                  {firstName} {lastName}
                </h1>

                <div className="flex">
                  <button
                    onClick={() => handleReviewRequest("Rejected", _id)}
                    className="btn btn-primary mx-2"
                  >
                    Ignore
                  </button>
                  <button
                    onClick={() => handleReviewRequest("Accepted", _id)}
                    className="btn btn-secondary mx-2"
                  >
                    Accept
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )) || <Loading />
  );
};

export default Requests;
