import React, { useState } from "react";
import "./index.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const LowerNavbar = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="lower_navbar">
      <ul>
        <li className="first_child" onClick={() => setIsClick(!isClick)}>
          All Categories {isClick ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          {isClick ? (
            <div className="dropdown">
              <ul>
                <strong>
                  <li className="first_heading">Mobiles</li>
                </strong>
                <li>Tablets</li>
                <li>Accessories</li>
                <li>Mobile Phones</li>
              </ul>
              <ul>
                <strong>
                  <li className="first_heading">
                    Electronics & Home Appliances
                  </li>
                </strong>
                <li>Computers & Accessories</li>
                <li>TV - Video - Audio</li>
                <li>Cameras & Accessories</li>
                <li>Games & Entertainment</li>
                <li>Other Home Appliances</li>
                <li>Generators, UPS & Power Solutions</li>
                <li>Kitchen Appliances</li>
                <li>AC & Coolers</li>
                <li>Fridges & Freezers</li>
              </ul>

              <ul>
                <strong>
                  <li className="first_heading"> Jobs</li>
                </strong>
                <li>Online</li>
                <li>Marketing</li>
                <li>Advertising & PR</li>
                <li>Education</li>
                <li>Customer Service</li>
                <li>Sales</li>
                <li>IT & Networking</li>
                <li>Clerical & Administration</li>
                <li>Human Resources</li>
                <li>Accounting & Finance</li>
                <li>Manufacturing</li>
                <li>Medical</li>
                <li>Part - Time</li>
                <li>Other Jobs</li>
              </ul>

              <ul>
                <strong>
                  <li className="first_heading"> Fashion & Beauty</li>
                </strong>
                <li>Accessories</li>
                <li>Clothes</li>
                <li>Footwear</li>
                <li>Jewellery</li>
                <li>Make Up </li>
                <li>Skin & Hair</li>
                <li>Watches</li>
                <li>Wedding</li>
                <li>Lawn & Pret</li>
                <li>Couture</li>
                <li>Manufacturing</li>
                <li>Other Fashion</li>
              </ul>
            </div>
          ) : null}
        </li>
        <li>Mobile Phones</li>
        <li>Cars</li>
        <li>Motorcycles</li>
        <li>Houses</li>
        <li>Tv-Audio-Video</li>
        <li>Tablets</li>
        <li>Land & Plots</li>
      </ul>
    </div>
  );
};

export default LowerNavbar;
