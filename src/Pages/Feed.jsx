import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setFeed } from "../store/reducers/feedReducer";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Feed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.feed);
  // console.log(data);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(setFeed(res.data));
    } catch (error) {
      if (error.status == 401) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    // console.log("feed rendered");

    getFeed();
  }, []);

  if (data && data.length == 0) return <div className="flex justify-center"><h1 className="text-xl">No New Users 😶‍🌫️</h1></div>;

  return (data && <Card currUser={data[0]} />) || <Loading />;
};

export default Feed;
