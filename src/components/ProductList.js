import React from "react";
import axios from "axios";
import { baseUrl } from "../constant";
import NewProduct from "./NewProduct";
import Card from "react-bootstrap/Card";
export default class ProductList extends React.Component {
  state = {
    message: this.props.corny,
    active: "products",
    routines: [],
    products: [],
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
          {/* <div>
            <h1>{eachProduct.name}</h1>
            <h4>{eachProduct.description}</h4>
            <>{eachProduct.type}</>
          </div> */}
          <Card>
            <Card.Img variant="top" src={require("../image/skincare2.jpeg")} />
            <Card.Body>
              <Card.Title>{eachProduct.name}</Card.Title>
              <Card.Text>{eachProduct.description}</Card.Text>
              {/* <Card.Text>{this.renderComments(eachRoutine)}</Card.Text> */}
              {/* <Button variant="primary">won't go somewhere</Button> */}
            </Card.Body>
          </Card>
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
          {this.renderProducts()}
        </div>
        <NewProduct />
      </React.Fragment>
    );
  }
}
