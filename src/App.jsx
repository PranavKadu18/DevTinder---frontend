import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Feed from "./Pages/Feed";
import { ContainerWithChildren } from "postcss/lib/container";
import Connections from "./Pages/Connections";
import Details from "./Pages/Details";
import Requests from "./Pages/Requests";
import TermsAnsConditions from "./Pages/TermsAnsConditions";
import Support from "./Pages/Support";
import AboutUs from "./Pages/AboutUs";
import Premium from "./Pages/Premuium";
import Chat from "./Pages/Chat";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/connections/details/:id" element={<Details />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/tnc" element={<TermsAnsConditions />} />
          <Route path="/support" element={<Support />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/chat/:targetUserId" element={<Chat />} />
          
        </Route>
      </Routes>
    </>
  );
};

export default App;
