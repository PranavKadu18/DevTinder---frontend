import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:w-[70vw] sm:h-[70vh] w-[90vw]">
      <div className="flex gap-4 items-center">
        <IoArrowBack
          onClick={() => navigate(-1)}
          className="text-2xl cursor-pointer hover:text-[#FFFF]"
        />
        <h1 className="text-3xl font-bold">About Us</h1>
      </div>
      <div className="mt-8 pl-10">
        <p>
          Welcome to DevTinder — where love, friendship, and code come together.
          ❤️👨‍💻👩‍💻
        </p>
        <br />
        <p>
          Tired of awkward hallway stares? Scared of sliding into DMs? We got
          you! DevTinder is your go-to platform to meet fellow students from
          your college (or nearby) without the stress of "what if they say no?"
        </p>{" "}
        <br />
        <p>
          Whether you’re looking for a coding partner, a movie date, or just
          someone to rant about that bug in your project — we gotchu. So, stop
          overthinking, start swiping, and let the algorithm do its magic. 😉 👉
        </p>
        <br />
        <p>
          Friendship, dating, networking — why choose one when you can have all
          three?
        </p>{" "}
        <br />{" "}
        <p>
          It’s time to stop debugging your love life. Try DevTinder today — you
          never know, your next "commit" might just be to someone special. 😏💖
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
