import React from "react";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="mainnav">
      <div className="wrap">
        <div>
          <img src="pinterest.png" alt="" />
        </div>
        <div>
          <img src="home.png" alt="" />
        </div>
        <div>
          <img src="compass.png" alt="" />
        </div>
        <div>
          <img src="more.png" alt="" />
        </div>
        <div>
          <img src="bell.png" alt="" />
        </div>
        <div>
          <img src="messenger.png" alt="" />
        </div>
        <div className="setting">
          <img src="setting.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
