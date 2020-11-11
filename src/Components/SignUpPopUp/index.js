import React from "react";
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClearIcon from "@material-ui/icons/Clear";
import { SignInWithFacebook, SignInWithGoogle } from "./../Firebase/firebase";

const SignUpPopUp = ({ setIsOpen, setEmailSignIn, setPhoneSignIn }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return  (
    <div className="popup">
      <div className="popup_child">
        <div>
          <div
            onClick={() => setIsOpen(false)}
            style={{ marginLeft: "auto", cursor: "pointer" }}
          >
            <ClearIcon />
          </div>
          <Slider {...settings}>
            <div className="slider">
              <div className="slider_image">
                <img alt='icon' src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.png" />
              </div>
              <div>
                <p>Help make olx safer place to buy and sell</p>
              </div>
            </div>
            <div className="slider">
              <div className="slider_image">
                <img alt='icon' src="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.png" />
              </div>
              <div>
                <p>Contact and close deals faster</p>
              </div>
            </div>
            <div className="slider">
              <div className="slider_image">
                <img alt='icon' src="https://statics.olx.com.pk/external/base/img/loginEntryPointChat.png" />
              </div>
              <div>
                <p>Save all your favorite item in one place</p>
              </div>
            </div>
          </Slider>
        </div>
        <div>
          <button onClick={() => setPhoneSignIn(false)}>Continue With Phone</button>
          <button onClick={SignInWithFacebook}>Continue With Facebook</button>
          <button onClick={SignInWithGoogle}>Continue With Google</button>
          <button onClick={() => setEmailSignIn(false)}>Continue With Email</button>
        </div>
        <div>
          <p>We won't share your personal details with anyone</p>
        </div>
      </div>
    </div>
  ) 
};


export default SignUpPopUp;
