import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar.js";
import { useUserAuth } from "../Context/UserAuthContext";
import { useLogin } from "../Context/LoginProvider";

function Login() {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUserAuth();
  const { setIsLoggedIn } = useLogin();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const  logout = () =>{
  //   localStorage.removeItem('logged');
  //   navigate('/login')
  async function handleLogin(e) {
    e.preventDefault();

    try {
      await login(email, password);
      setIsLoggedIn(true);
      navigate("/Profile");
    } catch (err) {
      console.log(err.message);
    }
  }

  //   try {
  //     await login(email, password);
  //     setIsLoggedIn(true);
  //     navigate("/Profile");
  //   } catch (err) {
  //   }
  // };

  return (
    <div className="Login">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>LOGIN</h1>
      <br />
      <form onSubmit={handleLogin}>
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
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button className="LoginSignup">SIGN IN</button>
        <br />
        <br />
        <br />
        <p>
          Don't have an account?
          <br />
          <Link className="ClickHere" to="/SignUp">
            Click here
          </Link>
        </p>
      </form>
      <div></div>
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

export default Login;
