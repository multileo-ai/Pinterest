import React from "react";
import "./App.css";
import SideNav from "./Components/SideNav";
import MainBox from "./Components/MainBox";

const App = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="box1">
          <SideNav />
        </div>
        <div className="box2">
          <MainBox />
        </div>
      </div>
    </div>
  );
};

export default App;
