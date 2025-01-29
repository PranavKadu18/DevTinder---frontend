import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, setUser } from "../store/reducers/userReducer";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";


const Login = () => {
  const [email, setEmail] = useState("shreya@gamil.com");
  const [password, setPassword] = useState("Shreya@123");
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      //saving data in the store without external actions
      dispatch(setUser(res.data));
      navigate("/");

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">LogIn</h2>

          <label className="form-control w-full max-w-xs pb-2">
            <div className="label">
              <span className="label-text">Enter Your Email</span>
            </div>
            <input
              value={email}
              onChange={(val) => setEmail(val.target.value)}
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs pb-2">
            <div className="label">
              <span className="label-text">Enter Your Password</span>
            </div>
            <input
              value={password}
              onChange={(val) => setPassword(val.target.value)}
              type="text"
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <div className="card-actions justify-end">
            <button onClick={() => submit()} className="btn btn-primary">
              LogIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
