import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import firebase from "../Firebase/firebase";

const SignInWithPhone = ({ setPhoneSignIn }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const SignInWithPhoneNumber = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "normal",
        callback: function (response) {
          handleSubmit();
        },
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SignInWithPhoneNumber();
    var phone = phoneNumber;
    var correctPhone = '+92' + phone.substring(1) ;
    var appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(correctPhone, appVerifier)
      .then(function (confirmationResult) {
        console.log(confirmationResult);
        window.confirmationResult = confirmationResult;
        var code = window.prompt('enter code');
        confirmationResult
          .confirm(code)
          .then(function (result) {
            var user = result.user;
            console.log('user', user);
          })
          .catch(function (error) {
          });
      })
      .catch(function (error) {});
    setPhoneNumber("");
  };
  return (
    <div style={{ height: "500px" }} className="popup">
      <div className="signInWithEmail_child">
        <div
          onClick={() => setPhoneSignIn(true)}
          style={{ marginLeft: "auto", cursor: "pointer" }}
        >
          <ClearIcon />
        </div>
        <div>
        <h3>Enter your phone</h3>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div id="sign-in-button"></div>
            <input
              id="captcha"
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              placeholder="Phone Number"
            ></input>
            <button>Next</button>
          </form>
          <div>
          <p>
            We won't reveal your phone number to anyone else nor use it to send
            you spam
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInWithPhone;
