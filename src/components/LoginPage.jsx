import React from "react";
import "./LoginPage.css";
import { auth, provider } from "../firebase";
import { logIn } from "../feature/userSlice";
import { useDispatch } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          logIn({
            displayName: user.displayName,
            email: user.email,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <div className="login_top">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUzHyguHyclHyUoHyYwHydiHjSsGkuTG0M9HysgHyQxHyjzFGKWG0SzGU0cICQ0HynrFF8AICAKICEZICO4GU/WFlncFVqlGknGGFQVICJEHy1SHzFZHjKKHEDCGFJ7HTwrHybPF1eFGkE/Hyt9HD2iyo+uAAAAzElEQVR4AcXRU6LEMAAF0MZ2be1/jc9M5ntu3ROnemYAfA/CJSP0PYwL+d8kVIxpzbRRxsr/6HxA8S2pbpLMMMmmbZsOhr6DGQ7cj9Nct9YpKws4ABD7JTYEFDBVFWImrtue42ErENdizeROkSbqi32mim+qNXtxtAnMnodo1yZVOUKzLuzBCqV9M8YwPooSSj1A9Nr2MeQ48Fd3Jw4HywcUsE/VftII1PVvU62n9BWl8KZrGvEX8aj1vb8+udZseX35qwjtn8/Xl+flBWovD+P4WnTiAAAAAElFTkSuQmCC"
            alt=""
          />
          <div className="login_text">
            <h1>PriceCompare</h1>
          </div>
        </div>
        <button variant="contained" color="primary" onClick={signIn}>
          Log in
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
