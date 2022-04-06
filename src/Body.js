import React from "react";
export default class Body extends React.Component {
  state = {
    message: this.props.corny,
  };
  render() {
    return (
      <div
        style={{
          fontFamily: "cursive",
          color: "red",
          textAlign: "center",
          border: "black solid 1px",
        }}
      >
        {this.state.message}
      </div>
    );
  }
}
