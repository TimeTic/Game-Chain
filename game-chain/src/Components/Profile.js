import "./Profile.css";
import Navbar from "./Navbar";
import { useUserAuth } from "../Context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { storage } from "../FirebaseConfig";
import {
  ref,
  uploadBytes,
  listAll,
  uploadBytesResumable
} from "firebase/storage";

function Profile() {
  const { user, logout } = useUserAuth();

  const navigate = useNavigate();

  function handleLogOut() {
    try {
      logout();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  }

  // const [image, setImage] = useState(null);

  /* function uploadImage() {
    if (image == null) return;

    const picsRef = ref(storage, "");
    uploadBytes(picsRef, image).then(() => {
      alert("Image Uploaded");
    });
  }

  const picsRef = ref(storage, "");

  useEffect(() => {
    listAll(picsRef);
  });
  */

  return (
    <div className="Profile">
      <Navbar />
      <br />
      <br />
      <br />
      <br /> <br /> <br />
      <h1 className="profileHeader">Profile</h1>
      <p className="profile">User email: {user && user.email} </p>
      <button className="logoutButton" onClick={handleLogOut}>
        <h4>Log Out</h4>
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Profile;
