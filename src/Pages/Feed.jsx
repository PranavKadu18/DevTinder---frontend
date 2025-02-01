import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setFeed } from "../store/reducers/feedReducer";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.feed);
  console.log(data);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(setFeed(res.data));
    } catch (error) {
      if(error.status == 400){
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    console.log("feed rendered");

    getFeed();
  }, []);

  return data && <Card currUser={data[0]} />;
};

export default Feed;
