import React from "react";
// import axios from "axios"; might not need these guys for buttons to work
// import { baseUrl } from "./constant";
export default class Products extends React.Component {
  // state = {
  //   message: this.props.corny,
  //   products: [
  //     {
  //       name: "something",
  //     },
  //   ],
  // };
  // async componentDidMount() {
  //   let r = await axios.get(baseUrl + "products");
  //   let allProducts = r.data;
  //   // console.log(baseUrl + "routines") confirmed to be working
  //   this.setState({
  //     products: allProducts,
  //   });
  // }
  /**
   * function and arrow functions both works
   * but arrows cos "this" keyword refer to the component while
   * normal functions "this" refers to the function
   */
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

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                variant="primary"
                className="nav-link active"
                aria-current="page"
              >
                View products in our routines!
              </button>
            </li>
            {/* <li className="nav-item">
              <button className="nav-link">Add New</button>
            </li> */}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
