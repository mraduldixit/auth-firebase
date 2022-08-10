import React, { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const UploadProfile = () => {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(null);
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async () => {
    console.log(auth.currentUser.email);
    if (profileImage == null) return;
    const imageRef = ref(storage, auth.currentUser.email + "/profileImage");
    await uploadBytes(imageRef, profileImage);
    navigate("/");
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = async (e) => {
    setProfileImage(e.target.files[0]);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  return (
    <div className="parent">
      <h3 className="img-title">Upload Profile Picture</h3>
      <div className="childUP">
        <div className="childImg">
            {
                profileImage!==null ? <img
                className="profile-alt"
                src={baseImage}
                height="200px"
                alt="Profile"
              /> :null
            }
          
        </div>
        <div className="description-img">
          <input type="file" accept="image/*" className="input-img" onChange={handleChange} />
          <button className="img-btn" onClick={uploadImage}>
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadProfile;
