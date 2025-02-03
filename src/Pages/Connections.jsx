import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import ConnectionsCard from "../Components/ConnectionsCard";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { setConnectinfo} from "../store/reducers/connectionReducer";

const Connections = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const userConnections = useSelector(state => state.connection.data);

  const getConnections = async () => {
    const res = await axios.get(BASE_URL + "/user/connections", {
      withCredentials: true,
    });
    // console.log(res.data);
    
    dispatch(setConnectinfo(res.data));
  };

  useEffect(() => {
    try {
        // console.log("connection rendered");
      getConnections();
    } catch (error) {
      if (error.status == 401) navigate("/login");
    }
  }, []);

  return (
    userConnections &&
    ((
      <div className="w-full h-[32vw]  py-4 flex justify-center">
        <div className="sm:w-[40%] w-[70%]  min-h-[100%]">
          <h1 className="text-xl mb-6">{userConnections.message}</h1>
          {userConnections.data.map((elem, idx) => (
            <ConnectionsCard key={idx} idx={idx} data={elem} />
          ))}
        </div>
      </div>
    ) || <Loading />)
  );
};

export default Connections;
