import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/authenticationSlice";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/_nav";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function submitForm(e) {
    e.preventDefault();
    let userCredentials = { email, password };
    try {
      const response = await dispatch(loginUser(userCredentials));
      sessionStorage.setItem("token", response.payload.body.token)
    } catch (error) {
      console.log(error);
    }
    navigate("/user");
  };

  return (
    <>
      <Navbar />
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form
            id="login-form"
            onSubmit={submitForm}
          >
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <div class="input-remember">
              <input
                type="checkbox"
                id="remember-me"
              />
              <label for="remember-me">Remember me</label>
            </div>
            <button
              type="submit"
              class="sign-in-button"
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default SignIn;
