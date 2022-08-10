import { React, useState } from "react";
import "./EditProfile.css";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import UploadProfile from "./UploadProfile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./NavBar";

const EditProfile = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const onChangeHandeler = async (e) => {
    setName(e.target.value);
  };

  const onclickHandler = async (e) => {
    e.preventDefault();
    await updateProfile(auth.currentUser, { displayName: name })
      .then(() => {
        toast.success("Name Updated", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        navigate("/");
      })
      .catch((e) => {
        toast.error(e, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <>
      <NavBar />
      <ToastContainer />
      <div className="profile">
        <div className="updateName">
          <h3 className="name-title">Edit Name</h3>
          <div className="description">
            <input
              type="text"
              className="input-box"
              onChange={onChangeHandeler}
            />
            <button className="name-btn" onClick={onclickHandler}>
              Upload Name
            </button>
          </div>
        </div>
        <div className="updateImg">
          <UploadProfile />
        </div>
      </div>
    </>
  );
};
export default EditProfile;
