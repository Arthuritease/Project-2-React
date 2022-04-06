import React from "react";
import "./styles.css";
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
        src={require("./images/healthy-skin.jpeg")}
        alt="smiling woman with nice skin"
      />
      <h2 className="instructions">
        Browse below for real skincare routines used by real people
      </h2>
    </React.Fragment>
  );
}

export default App;
