import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { deleteUser } from "../store/reducers/userReducer";

const Navbar = () => {
  const { data } = useSelector((state) => state.user);
  const pro =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  // console.log(data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    const res = await axios.post(BASE_URL + "/logout",{},{withCredentials : true});
    dispatch(deleteUser());
    navigate("/login");
  }

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1 mx-4">
        <a className="btn btn-ghost text-xl">🧑‍💻 DevTinder</a>
      </div>
      {data && (
        <div className="flex-none">
          <div className="dropdown dropdown-end mx-6 flex gap-2 items-center">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={data.profilePhoto}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-44 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={() => logout()}>
                <NavLink>Logout</NavLink>
              </li>
            </ul>
            <p>Welcome {data.firstName}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
