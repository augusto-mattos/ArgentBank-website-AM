import UserHeader from "../../components/_userHeader";
import Account from "../../components/_account";

import Navbar from "../../components/_nav";

function User() {

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
