import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfos } from "../store/userProfileSlice";

import logo from "../assets/argentBankLogo.png"

function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    if(sessionStorage.getItem("token")) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.clear()
    setIsLoggedIn(false)
  }

  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.userProfile.firstName);

  useEffect(() => {
    if(isLoggedIn) {
      dispatch(userInfos());
    }
  },);

  return (
    <>
      <nav class="main-nav">
        <a class="main-nav-logo" href="./">
          <img
            class="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </a>
        <div className={isLoggedIn ? "d-none" : ""}>
          <a class="main-nav-item" href="./sign-in">
            <i class="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
        <div className={isLoggedIn ? "" : "d-none"}>
          <a class="main-nav-item" href="./user">
            <i class="fa fa-user-circle"></i>
            {firstName}
          </a>
          <a class="main-nav-item" href="./" onClick={handleLogout}>
            <i class="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
