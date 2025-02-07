import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { setUser } from "../store/reducers/userReducer";
import Card from "../Components/Card";
import Loading from "./Loading";

const EditProfile = ({ currData }) => {
  const [firstName, setFirstName] = useState(currData.firstName);
  const [lastName, setLastName] = useState(currData.lastName);
  const [age, setAge] = useState(currData.age || "");
  const [gender, setGender] = useState(currData.gender);
  const [tags, setTags] = useState(currData.tags);
  const [profilePhoto, setProfilePhoto] = useState(currData.profilePhoto);
  const [bio, setBio] = useState(currData.bio);

  const [saved, setSaved] = useState(false);
  const [err, seterr] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const update = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, gender, tags, profilePhoto, bio },
        { withCredentials: true }
      );

      dispatch(
        setUser({ firstName, lastName, age, gender, tags, profilePhoto, bio })
      );

      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 3000);
    } catch (error) {
      seterr(error.response.data);
      if (error.status == 401) navigate("/login");
      // console.log(error);
    }
  };

  return (
    currData &&
    ((
      <div className="flex justify-center my-4">
        {saved && (
          <div className="toast z-50 toast-top toast-center">
            <div className="alert alert-success">
              <span>Profile Updated Successfully</span>
            </div>
          </div>
        )}

        <div className="sm:flex gap-6">
          <div className="card bg-base-300 sm:min-w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Profile</h2>

              <div className="mainholder gap-8 sm:flex">
                <div className="left">
                  <label className="form-control w-full max-w-xs pb-2">
                    <div className="label">
                      <span className="label-text">Enter Your First Name</span>
                    </div>
                    <input
                      value={firstName}
                      onChange={(val) => setFirstName(val.target.value)}
                      type="text"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>

                  <label className="form-control w-full max-w-xs pb-2">
                    <div className="label">
                      <span className="label-text">Enter Your Last Name</span>
                    </div>
                    <input
                      value={lastName}
                      onChange={(val) => setLastName(val.target.value)}
                      type="text"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>

                  <label className="form-control w-full max-w-xs pb-2">
                    <div className="label">
                      <span className="label-text">Enter Your Age</span>
                    </div>
                    <input
                      value={age}
                      onChange={(val) => setAge(val.target.value)}
                      type="text"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>

                  <label className="form-control w-full max-w-xs pb-2">
                    <div className="label">
                      <span className="label-text">Select Your Gender</span>
                    </div>
                    <div className="dropdown dropdown-bottom">
                      <div tabIndex={0} role="button" className="btn m-1">
                        {gender}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                      >
                        <li>
                          <a onClick={() => setGender("Male")}>Male</a>
                        </li>
                        <li>
                          <a onClick={() => setGender("Female")}>Female</a>
                        </li>
                        <li>
                          <a onClick={() => setGender("Other")}>Other</a>
                        </li>
                      </ul>
                    </div>
                  </label>
                </div>

                <div className="right">
                  <label className="form-control w-full max-w-xs pb-2">
                    <div className="label">
                      <span className="label-text">
                        Enter Tags That Describe You
                      </span>
                    </div>
                    <input
                      value={tags}
                      onChange={(val) => setTags(val.target.value)}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                  <label className="form-control w-full max-w-xs pb-2">
                    <div className="label">
                      <span className="label-text">
                        Enter Profile Photo URL
                      </span>
                    </div>
                    <input
                      value={profilePhoto}
                      onChange={(val) => setProfilePhoto(val.target.value)}
                      type="text"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>

                  <label className="form-control w-full max-w-xs pb-2">
                    <div className="label">
                      <span className="label-text">Enter Your Bio</span>
                    </div>
                    <textarea
                      className="textarea textarea-bordered"
                      value={bio}
                      onChange={(val) => setBio(val.target.value)}
                    ></textarea>
                  </label>
                </div>
              </div>

              <p className="text-red-600">{err}</p>

              <div className="card-actions justify-end">
                <button onClick={() => update()} className="btn btn-primary">
                  Update Profile
                </button>
              </div>
            </div>
          </div>

          <div>
            <h1 className="sm:mb-8 sm:mt-0 mb-4 mt-6 sm:text-xl">
              How Users Will See You
            </h1>
            <Card
              currUser={{ firstName, lastName, age, bio, profilePhoto, gender }}
            />
          </div>
        </div>
      </div>
    ) || <Loading />)
  );
};

export default EditProfile;
