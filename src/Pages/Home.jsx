import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { setUser } from "../store/reducers/userReducer";

const Home = () => {
  const { data } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(setUser(res.data));
    } catch (error) {
      if (error.status == 401) navigate("/login");
    }
  };

  useEffect(() => {
    // console.log("home rendered");

    fetchUser();
  }, []);

  return (
    <div className="w-[110vw] h-[102vh] sm:w-full sm:h-screen  gradient-background">
      <Navbar />
      <div className="w-full min-h-[77.8%] p-5 flex justify-center gradient-background">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
