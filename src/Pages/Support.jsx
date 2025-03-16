import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();

  return (
    <div className="sm:w-[70vw] sm:h-[70vh] w-[90vw]">
      <div className="flex gap-4 items-center">
        <IoArrowBack
          onClick={() => navigate(-1)}
          className="text-2xl cursor-pointer hover:text-[#FFFF]"
        />
        <h1 className="text-3xl font-bold">Contact Us</h1>
      </div>
      <div className="mt-8 pl-10">
        <p>Got questions? Bugs? Heartbreak? We’ve got you covered!</p>
        <br />
        <p>📧 Email: pranavkadu2003@gmail.com </p>
        <br />
        <p>📱 Phone: +91 8698738044</p>
        <br />
        <p>
          Whether it's a technical issue, a payment glitch, or just emotional
          damage — hit us up! We're here to help you navigate both code and
          love. ❤️‍🔥
        </p>
      </div>
    </div>
  );
};

export default Support;
