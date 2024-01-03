import logo from "../assets/argentBankLogo.png"

function Navbar() {

  const currentPathname = window.location.pathname;
  const userPage = currentPathname.includes('/user');

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
        <div className={userPage ? "d-none" : ""}>
          <a class="main-nav-item" href="./sign-in">
            <i class="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
        <div className={userPage ? "" : "d-none"}>
          <a class="main-nav-item" href="./user">
            <i class="fa fa-user-circle"></i>
            Tony
          </a>
          <a class="main-nav-item" href="./">
            <i class="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
