import React from "react";
import axios from "axios";
import { baseUrl } from "../constant";
export default class ProductList extends React.Component {
  state = {
    message: this.props.corny,
    products: [
      {
        name: "something",
      },
    ],
  };
  async componentDidMount() {
    let r = await axios.get(baseUrl + "products");
    let allProducts = r.data;
    // console.log(baseUrl + "routines") confirmed to be working
    this.setState({
      products: allProducts,
    });
  }
  renderProducts = () => {
    let productArray = this.state.products.map((eachProduct, index) => {
      return (
        <React.Fragment key={`eachProduct${index}`}>
          <div>
            <h1>{eachProduct.name}</h1>
            <span>{eachProduct.description}</span>
          </div>
        </React.Fragment>
      );
    });
    return productArray;
  };
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: "beige",
            marginTop: "2px",
            fontFamily: "revert",
          }}
        >
          {this.state.message}
        </div>
        <div>{this.renderProducts()}</div>
      </React.Fragment>
    );
  }
}
