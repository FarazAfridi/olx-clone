import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { SignInWithEmailOnly } from "../Firebase/firebase";

const SignInWithEmailAndPassword = ({ setEmailSignIn }) => {
  const [email, setEmail] = useState("");

  var actionCodeSettings = {
    url: "http://localhost:3000/",
    handleCodeInApp: true,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SignInWithEmailOnly(email, actionCodeSettings);
    window.localStorage.setItem('emailForSignIn', email);
    setEmail('');
  }

  return (
    <div style={{ height: "500px" }} className="popup">
      <div className="signInWithEmail_child">
        <div
          onClick={() => setEmailSignIn(true)}
          style={{ marginLeft: "auto", cursor: "pointer" }}
        >
          <ClearIcon />
        </div>
        <div><h3>Sign In With Email</h3></div>
        <div>
          <form onSubmit={handleSubmit}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input>
            <button>Submit</button>
          </form>
          <div>
          <p>
            We won't reveal your email to anyone else nor use it to send you
            spam
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInWithEmailAndPassword;
