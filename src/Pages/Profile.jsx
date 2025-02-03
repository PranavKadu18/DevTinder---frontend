import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import Loading from "./Loading";

const Profile = () => {
  useEffect(() => {
    console.log("Profile rendered");
  });
  const user = useSelector((state) => state.user.data);
  return (user && <EditProfile currData={user} />) || <Loading />;
};

export default Profile;
