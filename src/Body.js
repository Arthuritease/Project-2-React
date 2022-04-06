import React from "react";
import axios from "axios";
import { baseUrl } from "./constant";
export default class Body extends React.Component {
  state = {
    message: this.props.corny,
    routines: [
      {
        name: "Ace",
      },
    ],
  };
  async componentDidMount() {
    let r = await axios.get(baseUrl + "routines");
    let allRoutines = r.data;
    console.log(r.data);
    this.setState({
      routines: allRoutines,
    });
  }
  /**
   * function and arrow functions both works
   * but arrows cos "this" keyword refer to the component while
   * normal functions "this" refers to the function
   */
  renderRoutines = () => {
    let routineArray = this.state.routines.map((indivRoutine, index) => {
      return (
        <React.Fragment key={`indivRoutine${index}`}>
          <div>
            <h1>{indivRoutine.title}</h1>
            <span>{indivRoutine.description}</span>
          </div>
        </React.Fragment>
      );
    });
    return routineArray;
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            fontFamily: "cursive",
            color: "red",
            textAlign: "center",
            border: "black solid 1px",
          }}
        >
          {this.state.message}
          {/* {this.state.routines} */}
        </div>
        <div>{this.renderRoutines()}</div>
      </React.Fragment>
    );
  }
}
