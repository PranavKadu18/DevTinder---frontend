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
        </Route>
      </Routes>
    </>
  );
};

export default App;
