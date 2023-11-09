import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";
import { useUserAuth } from "../Context/UserAuthContext";
import Navbar from "./Navbar";

function SignUp() {
  const { signUp } = useUserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/Profile");
    } catch (err) {
      setError(err.message);
      alert(
        "Must enter a valid email and/or password must be at least 6 characters long"
      );
    }
  };

  return (
    <div className="SignUp">
      <Navbar />
      <br />
      <br />
      <br />
      <br /> <br /> <br />
      <h1>SIGN UP</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          className="INPUT"
          placeholder="    Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <input
          className="INPUT"
          placeholder="    Password"
          type="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button className="LoginSignup">SIGN UP</button>
        <br />
        <br />
        <br />
        <p>
          Already have an account?
          <br />
          <Link className="ClickHere" to="/Login">
            Sign In!
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
