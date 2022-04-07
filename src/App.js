import React from "react";
import Body from "./Body";
import "./styles.css";
import Products from "./Products";
import ProductList from "./components/ProductList";

function App() {
  return (
    <React.Fragment>
      <h1 style={{ backgroundColor: "red" }}> JUST FACE IIIIIIIT</h1>
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
        <Body corny="The Journey To Your Skin But Better Begins Here..." />
      </div>
      {/* <div>
        <Products />
      </div>
      <div>
        <ProductList /> succesfully linked
      </div> */}
      {/* <div className="container">{baseUrl}routines</div> */}
    </React.Fragment>
  );
}

export default App;
