import React from "react";
import "./index.css";

const OlxAppAd = () => {
  return (
    <div className="app_ad">
      <div>
        <img alt='olx-app' src="https://statics.olx.com.pk/external/base/img/phone-app.png" />
      </div>
      <div>
        <h2>TRY THE OLX APP</h2>
        <p>
          Buy, sell and find just about anything using the app on your mobile.
        </p>
      </div>
      <div>
          <p>GET YOUR APP TODAY</p>
          <img alt='olx-app' className="image1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png" />
            <img alt='olx-app' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Google_Play_Store_badge_FR.svg/1280px-Google_Play_Store_badge_FR.svg.png" />
      </div>
    </div>
  );
};

export default OlxAppAd;
