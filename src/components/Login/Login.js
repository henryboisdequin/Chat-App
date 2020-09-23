import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

export default function Login() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="login">
      <div className="login-container">
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google_Chat.svg"
        ></img>
        <div className="login-text">
          <h1>Sign In to Chat</h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}
