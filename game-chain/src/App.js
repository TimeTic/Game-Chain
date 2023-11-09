import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Shop from "./Components/Shop";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Profile from "./Components/Profile";
import HamMenu from "./Components/HamMenu";
import Xbox from "./Components/Xbox";
import Playstation from "./Components/Playstation";
import Nintendo from "./Components/Nintendo";
import PC from "./Components/PC";
import ProtectedRoute from "./Components/ProtectedRoute";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import Helmet from "react-helmet";
import Navbar from "./Components/Navbar";
// import Check1 from "./Components/Check1";
import Check from "./Components/check.js";
// import Toggle from "./Components/toggle/Toggle";
import LoginProvider from "./Context/LoginProvider";

export default function App() {
  return (
    <div className="App">
      <div classname="Pages"> </div>
      {/* <Toggle /> */}
      {/* <Check /> */}
      {/* <Navbar /> */}
      <HamMenu />
      <LoginProvider>
        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Check" element={<Check />} />
            <Route path="/Xbox" element={<Xbox />} />
            <Route path="/Playstation" element={<Playstation />} />
            <Route path="/Nintendo" element={<Nintendo />} />
            <Route path="/PC" element={<PC />} />
            <Route
              path="/Profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserAuthContextProvider>
      </LoginProvider>

      {/* <footer className="footer">
        <a className="title"> Our Socials! </a>
        <br />
        <br />
        Contacts: gamechainn@gmail.com
        <br />
        <br />
        Instagram: gamechainn
      </footer> */}

      <div className="application">
        <Helmet>
          <style>{"body { background-color: #333851; }"}</style>
        </Helmet>
        <Footer />
      </div>
    </div>
  );
}
