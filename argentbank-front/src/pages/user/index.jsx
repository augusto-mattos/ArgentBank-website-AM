import UserHeader from "../../components/_userHeader";
import Account from "../../components/_account";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../../components/_nav";

function User() {

  const navigate = useNavigate();
  useEffect(() => {
    if(!sessionStorage.getItem("token")) {
      navigate("/");
    }
  })

  return (
    <>
      <Navbar />
      <main class="main bg-dark">
        <UserHeader />
        <Account />
      </main>
    </>
  );
}

export default User;
