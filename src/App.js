import React from "react";
import Body from "./Body";
import Routines from "./Body";
import "./styles.css";
import { baseUrl } from "./constant.js";

function App() {
  return (
    <React.Fragment>
      <h1 style={{ backgroundColor: "red" }}>Face it bodoh</h1>
      <div
        className="intro"
        style={{ backgroundColor: "coral", fontFamily: "Tahoma" }}
      >
        <h4>Your skin is the largest organ on your body.</h4>
        <h4>It's time to take your health seriously...</h4>
      </div>
      <img
        className="mainFace"
        src={require("./image/healthy-skin.jpeg")}
        alt="smiling woman with nice skin"
      />
      <div className="routinesCard">
        <h2 className="instructions">
          Browse below for real skincare routines used by real people
        </h2>
        <Body corny="Set your eyes upon the glorious routines" />
      </div>
      {/* <div className="container">{baseUrl}routines</div> */}
    </React.Fragment>
  );
}

export default App;
