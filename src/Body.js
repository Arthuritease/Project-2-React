import React from "react";
import axios from "axios";
import { baseUrl } from "./constant";
import ProductList from "./components/ProductList";
import RoutineList from "./components/RoutineList";
export default class Body extends React.Component {
  state = {
    message: this.props.corny,
    active: "routines",
    routines: [],
    products: [],
  };
  // async componentDidMount() {
  //   let r = await axios.get(baseUrl + "routines");
  //   let allRoutines = r.data;
  //   // console.log(baseUrl + "routines") confirmed to be working
  //   this.setState({
  //     routines: allRoutines,
  //   });
  // }
  // /**
  //  * function and arrow functions both works
  //  * but arrows cos "this" keyword refer to the component while
  //  * normal functions "this" refers to the function
  //  */
  // renderRoutines = () => {
  //   let routineArray = this.state.routines.map((eachRoutine, index) => {
  //     return (
  //       <React.Fragment key={`eachRoutine${index}`}>
  //         <div>
  //           <h1>{eachRoutine.title}</h1>
  //           <span>{eachRoutine.description}</span>
  //         </div>
  //       </React.Fragment>
  //     );
  //   });
  //   return routineArray;
  // };
  // async componentDidMount() {
  //   let r = await axios.get(baseUrl + "products");
  //   let allProducts = r.data;
  //   // console.log(baseUrl + "routines") confirmed to be working
  //   this.setState({
  //     products: allProducts,
  //   });
  // }
  // renderProducts = () => {
  //   let productArray = this.state.products.map((eachProduct, index) => {
  //     return (
  //       <React.Fragment key={`eachProduct${index}`}>
  //         <div>
  //           <h1>{eachProduct.name}</h1>
  //           <span>{eachProduct.description}</span>
  //         </div>
  //       </React.Fragment>
  //     );
  //   });
  //   return productArray;
  // };

  updateActive = (fieldName) => {
    this.setState({
      active: fieldName,
    });
  };

  renderContent = () => {
    if (this.state.active === "routines") {
      return (
        <React.Fragment>
          <div
            style={{
              fontFamily: "cursive",
              color: "red",
              textAlign: "center",
              border: "black solid 4px",
            }}
          >
            {this.state.message}
            {/* {this.state.routines} */}
          </div>
          <div>
            <RoutineList />
          </div>
        </React.Fragment>
      );
    } else if (this.state.active === "products") {
      return (
        <React.Fragment>
          <div
            style={{
              fontFamily: "cursive",
              color: "red",
              textAlign: "center",
              border: "red solid 4px",
            }}
          >
            {this.state.message}
            {/* {this.state.routines} */}
          </div>
          <div>
            <ProductList />
          </div>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={() => this.updateActive("routines")}>
            Routines
          </button>
          <button onClick={() => this.updateActive("products")}>
            Products
          </button>
        </div>

        <div>{this.renderContent()}</div>
      </React.Fragment>
    );
  }
}
