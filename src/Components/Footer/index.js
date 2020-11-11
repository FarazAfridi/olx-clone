import React from "react";
import "./index.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p>
          <strong>POPULAR CATEGORIES</strong>
        </p>
        <p>Cars</p>
        <p>Flats for rent</p>
        <p>Jobs</p>
        <p>Mobile Phones</p>
      </div>
      <div>
        <p>
          <strong>TRENDING SEARCHES</strong>
        </p>
        <p>Bikes</p>
        <p>Watches</p>
        <p>Books</p>
        <p>Dogs</p>
      </div>
      <div>
        <p>
          <strong>ABOUT US</strong>
        </p>
        <p>About OLX Group</p>
        <p>OLX Blog</p>
        <p>Contact Us</p>
        <p>OLX for Businesses</p>
      </div>
      <div>
        <p>
          <strong> OLX</strong>
        </p>
        <p>Help</p>
        <p>Sitemap</p>
        <p>Legal & Privacy information</p>
      </div>
      <div>
        <p>
          <strong>FOLLOW US</strong>
        </p>  
        <span className="icon"><FacebookIcon /></span>
        <span className="icon"><TwitterIcon /></span>
        <span className="icon"><PlayCircleOutlineIcon /></span>
        <span className="icon"><InstagramIcon /></span>  
        <div>
        <img alt='social-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png" />
        <img alt='social-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Google_Play_Store_badge_FR.svg/1280px-Google_Play_Store_badge_FR.svg.png" />
        </div>
      </div>
    </div>
  );
};

const LowerFooter = () => {
  return ( <div className="lower_footer">
  <div>
  <span><strong>Other Countries </strong></span>
  <span>India -</span>
  <span>South Africa -</span>
  <span>Indonesia</span>
  </div>
  <div> 
  <span><strong>Free Classifieds in Pakistan.</strong></span>
  <span> © 2006-2020 OLX</span>
  </div>
  </div> );
}

export {LowerFooter};
export default Footer;
