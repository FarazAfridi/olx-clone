import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import LowerNavbar from "./Components/LowerNavbar";
import Body from "./Components/Body";
import Footer, { LowerFooter } from "./Components/Footer";
import Modal from "./Components/Modal/index";
import SignUpPopUp from "./Components/SignUpPopUp/index";
import { auth, db } from "./Components/Firebase/firebase";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Post from "./Components/Post/index";
import * as ROUTES from "./Routes";
import { useDispatch, useSelector } from "react-redux";
import SignInWithEmailAndPassword from "./Components/SignUpPopUp/SignInWithEmailAndPassword";
import SignInWithPhone from "./Components/SignUpPopUp/SignInWithPhone";
import ItemsPage from "./Components/ItemsPage/ItemsPage";
import Chat from "./Components/Chat/index";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [emailSignIn, setEmailSignIn] = useState(true);
  const [phoneSignIn, setPhoneSignIn] = useState(true);

  const user = useSelector((state) => state.currentUser);
  const setCurrentUser = (authUser) => {
    dispatch({ type: "SET_CURRENT_USER", payload: authUser });
  };
  useEffect(() => {
    console.log(process.env.API_KEY);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setCurrentUser(authUser);
      }
      if (auth.isSignInWithEmailLink(window.location.href)) {
        var email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          email = window.prompt("Please provide your email for confirmation");
        }
        auth
          .signInWithEmailLink(email, window.location.href)
          .then(function (result) {
            setCurrentUser(result);

            db.ref(`user/${result.user.uid}`).once("value", (snap) => {
              console.log("database called");
              db.ref(`user/${result.user.uid}`).set({
                username: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL,
              });
              window.localStorage.removeItem("emailForSignIn");
            });
          })
          .catch(function (error) {});
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar setIsOpen={setIsOpen} />
        <LowerNavbar />
        {!user ? (
          <Modal isOpen={isOpen}>
            {!emailSignIn && (
              <SignInWithEmailAndPassword setEmailSignIn={setEmailSignIn} />
            )}
            {emailSignIn & phoneSignIn && (
              <SignUpPopUp
                setPhoneSignIn={setPhoneSignIn}
                setEmailSignIn={setEmailSignIn}
                setIsOpen={setIsOpen}
              />
            )}
            {!phoneSignIn && (
              <SignInWithPhone setPhoneSignIn={setPhoneSignIn} />
            )}
          </Modal>
        ) : null}
        <Switch>
          <Route
            path={ROUTES.MESSAGE}
            render={() => (user ? <Chat /> : <Redirect to={ROUTES.HOME} />)}
          />
          <Route path={ROUTES.ITEM} component={ItemsPage} />
          <Route exact path={ROUTES.HOME} component={Body} />
          <Route
            exact
            path={ROUTES.POST}
            render={() => (user ? <Post /> : <Redirect to={ROUTES.HOME} />)}
          />
        </Switch>
        <Footer />
        <LowerFooter />
      </div>
    </Router>
  );
}

export default App;
