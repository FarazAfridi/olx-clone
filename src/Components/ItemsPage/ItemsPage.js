import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../Firebase/firebase";
import "./ItemsPage.css";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PhoneIcon from "@material-ui/icons/Phone";

const ItemsPage = () => {
  const { item } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    db.ref(`/items/${item}`).on("value", (snap) => {
      const data = snap.val();
      setItems(data);
    });
  }, [item]);

  return (
    <div className="itemPage">
      <div className="itemPage_leftContainer">
        <div>
          <img src={items.photo} alt={items.category} />
        </div>
        <div className="leftContainer_details">
          <h4>Details</h4>
          <div>
            <div>
              <span>Condition</span>
              <span>{items.condition}</span>
            </div>
            <div>
              <span>Type</span>
              <span>{items.category}</span>
            </div>
          </div>
        </div>
        <div className="leftContainer_description">
          <h4>Description</h4>
          <p>
          {items.description}
          </p>
        </div>
      </div>
      <div className="itemPage_rightContainer">
        <div>
          <div>
            <h3>Rs {items.price}</h3>
            <ShareIcon className="itemPage_icon" />
            <FavoriteBorderIcon style={{ cursor: "pointer" }} />
          </div>
          <p>{items.title}</p>
          <p>{items.location}</p>
        </div>
        <div>
          <h4>Seller description</h4>
          <div className="imageContainer_profile">
            <span>
              <AccountCircleIcon className="itemPage_icon2" />
            </span>
            <p>{items.name}</p>
            <span>
              <ArrowForwardIosIcon className="itemPage_icon3" />
            </span>
          </div>
          <div><Link style={{textDecoration: 'none'}} to={`/item/${item}/${items.room}`} className='btn'>Chat with seller</Link></div>
          <div >
            <PhoneIcon /> {items.phoneNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsPage;
