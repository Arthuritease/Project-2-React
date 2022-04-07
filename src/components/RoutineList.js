import React from "react";
import axios from "axios";
import { baseUrl } from "../constant";

export default class RoutineList extends React.Component {
  state = {
    message: this.props.corny,
    active: "routines",
    routines: [],
    products: [],
  };
  async componentDidMount() {
    let r = await axios.get(baseUrl + "routines");
    let allRoutines = r.data;
    // console.log(baseUrl + "routines") confirmed to be working
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
    let routineArray = this.state.routines.map((eachRoutine, index) => {
      return (
        <React.Fragment key={`eachRoutine${index}`}>
          <div>
            <h1>{eachRoutine.title}</h1>
            <span>{eachRoutine.description}</span>
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
