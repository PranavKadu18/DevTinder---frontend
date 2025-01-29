import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {

  const {data} = useSelector(state => state.user)
  const navigate = useNavigate();

  useEffect(() => {
    if(!data){
      navigate("/login");
    }
  },[])

  return (
    <div className="w-full h-screen bg-base-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
