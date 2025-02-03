import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { setConnectinfo } from "../store/reducers/connectionReducer";
import Holder from "../Components/Holder";

const Details = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.connection.data);
  const dispatch = useDispatch();

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

  console.log(user);
  

  return (
    user && (
      <div className="w-[80vw] h-[70vh] ml-[10vw] p-4 flex gap-10">
        <img
          className="w-[30%] h-[80%] object-cover"
          src={user.data[id].profilePhoto}
          alt=""
        />
        <div>
          <h1 className="text-2xl">
            {user.data[id].firstName} {user.data[id].lastName}{" "}
            <span className="text-base">({user.data[id].age})</span>
          </h1>
          <h1>{user.data[id].gender}</h1>
          <h1 className="text-sm mt-5">{user.data[id].bio}</h1>
          <div className="flex gap-2 mt-5">
            {user.data[id].tags?.map((elem) => (
              <Holder title={elem} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Details;
