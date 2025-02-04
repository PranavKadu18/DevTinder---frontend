import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import ConnectionsCard from "../Components/ConnectionsCard";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { setConnectinfo } from "../store/reducers/connectionReducer";

const Connections = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userConnections = useSelector((state) => state.connection.data);
  // console.log(userConnections);

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

  if (userConnections && userConnections.message == 'No connections')
    return (
      <div className="flex justify-center">
        <h1 className="text-xl">No Connections Yet 🥲</h1>
      </div>
    );

  return (
    userConnections &&
    ((
      <div className="w-full h-[33vw]  py-4 flex justify-center">
        <div className="sm:w-[40%] p-4 w-[70%] overflow-auto overflow-x-hidden h-[100%]">
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
