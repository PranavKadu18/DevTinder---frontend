import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen bg-base-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
