import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setFeed } from "../store/reducers/feedReducer";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Feed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDataOver, setIsDataOver] = useState(false);

  const { data } = useSelector((state) => state.feed);
  console.log(data);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });

      if (res.data.length == 0) {
        setIsDataOver(true);
        dispatch(setFeed(null));
      } else dispatch(setFeed(res.data));
    } catch (error) {
      if (error.status == 401) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    // console.log("feed rendered");
    // console.log(data);
    
    if((data == null || data.length == 0) && !isDataOver){
      console.log("getting data");
      
      getFeed();
    }
  }, [data]);

  if (isDataOver) {
    return (
      <div className="flex justify-center">
        <h1 className="text-xl">No New Users 😶‍🌫️</h1>
      </div>
    );
  }

  return (data && <Card currUser={data[0]} />) || <Loading />;
};

export default Feed;
