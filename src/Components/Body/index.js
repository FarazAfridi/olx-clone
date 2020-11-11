import React, { useEffect, useState } from "react";
import "./index.css";
import ItemCard from "./../ItemCard";
import OlxAppAd from "../OlxAppAd";
import { db } from "../Firebase/firebase";

const Body = () => {
  const [items, setItems] = useState({});

  useEffect(() => {
    db.ref(`items`)
      .on("value", (snap) => {
        const data = snap.val();
        setItems(
          Object.keys(data).map((key) => ({
            uid: key,
            ...data[key],
          }))
        );
      });
  }, []);
  return (
    <div className="body">
      <div className="body_ad">
        <img
          alt="ad"
          src="https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg"
        />
      </div>
      <h1>Fresh recommendations</h1>
      <div className="items">
        {Object.entries(items).map((item) => (
          <ItemCard id={item[1].uid} key={item[1].uid} item={item} />
        ))}
      </div>
      <OlxAppAd />
    </div>
  );
};

export default Body;
