import React from "react";
import axios from "axios";
import NewRoutine from "./NewRoutine";
import { baseUrl } from "../constant";
import Card from "react-bootstrap/Card";

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
          {/* <div>
            <h1>{eachRoutine.title}</h1>
            <h4>{eachRoutine.description}</h4>
            <p>{eachRoutine.timing}</p>
          </div> */}
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={require("../image/skincare.jpeg")} />
            <Card.Body>
              <Card.Title>{eachRoutine.title}</Card.Title>
              <Card.Text>{eachRoutine.description}</Card.Text>
              {/* <Card.Text>{this.renderComments(eachRoutine)}</Card.Text> */}
              {/* <Button variant="primary">won't go somewhere</Button> */}
            </Card.Body>
          </Card>
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
            backgroundColor: "bisque",
            marginTop: "2px",
            fontFamily: "revert",
          }}
        >
          {this.renderRoutines()}
        </div>
        <NewRoutine />
      </React.Fragment>
    );
  }
}
