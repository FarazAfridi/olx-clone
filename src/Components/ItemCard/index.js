import React from "react";
import "./index.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";

const ItemCard = ({ item, id }) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "#002F34" }}
      to={`/item/${id}`}
      className="item_cards"
    >
      <div className="item_card">
        <div className="item_card_image">
          <FavoriteBorderIcon className="heart_icon" />
          <img alt="dummy-img" src={item[1].photo} />
        </div>
        <div className="item_card_content">
          <p>Rs {item[1].price}</p>
          <p>{item[1].title}</p>
          <p>{item[1].location}</p>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
