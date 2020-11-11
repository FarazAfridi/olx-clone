import React, { useEffect, useState } from "react";
import "./index.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PostAddIcon from "@material-ui/icons/PostAdd";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import TuneIcon from "@material-ui/icons/Tune";
import GetAppIcon from "@material-ui/icons/GetApp";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { auth } from "./../Firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../../Routes";
import { Avatar } from "@material-ui/core";

const Navbar = ({ setIsOpen }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [popup, setPopup] = useState(false);
  const user = useSelector((state) => state.currentUser);
  const history = useHistory();

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <svg
        onClick={() => history.push(ROUTES.HOME)}
          width="48px"
          height="48px"
          viewBox="0 0 1024 1024"
          data-aut-id="icon"
          fillRule="evenodd"
        >
          <path
            className="rui-77aaa"
            d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
          ></path>
        </svg>
      </div>
      <div className="navbar_location">
        <span>
          <SearchIcon className="input_icon" />
        </span>
        <input
          onClick={() => setIsClicked(true)}
          type="text"
          placeholder="Search city, area or location"
        ></input>
        <span onClick={() => setIsClicked(!isClicked)}>
          {isClicked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </span>
      </div>
      <div className="navbar_search">
        <input
          type="text"
          placeholder="Find Cars, Mobile Phones and more..."
        ></input>
        <SearchIcon className="input_search" />
      </div>
      <div className={`navbar_signUp ${user ? "increase_width" : null}`}>
        {!user ? (
          <span onClick={() => setIsOpen(true)}>Login</span>
        ) : (
          <div>
            <span>
              <NotificationsNoneIcon className="signInIcons" />
            </span>
            <span>
              <ChatBubbleOutlineIcon className="signInIcons" />
            </span>
            <span onClick={() => setPopup(!popup)}>
              <Avatar
                className="signInIcons"
                alt="profile-pic"
                src={user?.photoURL}
              />
              {popup ? <ProfilePopup user={user} /> : null}
            </span>
          </div>
        )}

        <button onClick={() => setIsOpen(true)}>
          <Link
            style={{ textDecoration: "none", color: "#002F34" }}
            to={user ? ROUTES.POST : ""}
          >
            Sell
          </Link>
        </button>
      </div>
    </div>
  );
};

export const ProfilePopup = ({ user }) => {
  const dispatch = useDispatch();
  const setCurrentUser = (authUser) => {
    dispatch({ type: "LOGOUT_USER", payload: authUser });
  };
  const history = useHistory();

  return (
    <div className="profile_popup">
      <div>
        <div>
          <AccountCircleIcon className="profile" />
        </div>
        <div>
          <p>Hello,</p>
          <h3>{user?.displayName || user?.phoneNumber}</h3>
          <p>View and edit profile</p>
        </div>
      </div>
      <div onClick={() => history.push(ROUTES.POST)}>
        <LibraryBooksIcon className="profile_icon" />
        <span>My Ads</span>
      </div>
      <div>
        <PostAddIcon className="profile_icon" />
        <span>Buy Business Packages</span>
      </div>
      <div>
        <CreditCardIcon className="profile_icon" />
        <span>Bought Packages and Billing</span>
      </div>
      <div>
        <TuneIcon className="profile_icon" />
        <span>Settings</span>
      </div>
      <div>
        <GetAppIcon className="profile_icon" />
        <span>Install Olx Lite app</span>
      </div>
      <div>
        <ExitToAppIcon className="profile_icon" />
        <span onClick={() => auth.signOut().then(() => setCurrentUser(null))}>
          Logout
        </span>
      </div>
    </div>
  );
};

export default Navbar;
