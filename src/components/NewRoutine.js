import axios from "axios";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import { baseUrl } from "../constant";
export default class NewRoutine extends React.Component {
  state = {
    name: "",
    email: "",
    title: "",
    description: "",
    timing: "",
    image: "",
    skin_type: [],
    comments: [],

    allCleanser: [],
    allSerum: [],
    allToner: [],
    allMoisturizer: [],
    // allExfoliator:[], AWAITING USE
    // allSunscreen:[]

    cleanser: "",
    toner: "",
    serum: "",
    moisturizer: "",
    sunscreen: "",

    isLoaded: false,
  };
  // To sort products in products routine into their respective types
  componentDidMount = async () => {
    let r = await axios.get(baseUrl + "products");
    let allProducts = r.data;

    let cleanserArray = [];
    let serumArray = [];
    let tonerArray = [];
    let moisturizerArray = [];
    let sunscreenArray = [];

    for (let product of allProducts) {
      if (product.type == "cleanser") {
        cleanserArray.push(product);
      } else if (product.type == "toner") {
        tonerArray.push(product);
      } else if (product.type == "serum") {
        serumArray.push(product);
      } else if (product.type == "moisturizer") {
        moisturizerArray.push(product);
      } else {
        sunscreenArray.push(product);
      }
    }
    this.setState({
      isLoaded: true,
      allCleanser: cleanserArray,
      allSerum: serumArray,
      allToner: tonerArray,
      allMoisturizer: moisturizerArray,
      allSunscreen: sunscreenArray,
    });
  };

  submitNewRoutine = async () => {
    const {
      name,
      email,
      title,
      description,
      timing,
      image,
      skin_type,
      cleanser,
      toner,
      serum,
      moisturizer,
      sunscreen,
    } = this.state;

    console.log({
      name,
      email,
      title,
      description,
      timing,
      image,
      skin_type,
      products: {
        cleanser,
        toner,
        serum,
        moisturizer,
        sunscreen,
      },
      comments: [
        {
          score: "",
          date: "",
          email: "",
          description: "",
          _id: "",
        },
      ],
    });

    await axios.post(baseUrl + "routines", {
      name,
      email,
      title,
      description,
      timing,
      image,
      skin_type,
      products: {
        cleanser,
        serum,
        toner,
        moisturizer,
        sunscreen,
      },
      comments: [
        {
          score: "",
          date: "",
          email: "",
          description: "",
          _id: "",
        },
      ],
    });
  };

  updateProductsDropDown = (stateName, value) => {
    this.setState({
      [stateName]: value,
    });
  };

  // To render each product of each type
  renderCleanser = () => {
    return this.state.allCleanser.map((eachCleanser) => {
      return (
        <React.Fragment>
          <li
            onClick={() =>
              this.updateProductsDropDown("cleanser", eachCleanser.name)
            }
          >
            <a>{eachCleanser.name}</a>
          </li>
        </React.Fragment>
      );
    });
  };

  renderToner = () => {
    return this.state.allToner.map((eachToner) => {
      return (
        <React.Fragment>
          <li
            onClick={() => this.updateProductsDropDown("toner", eachToner.name)}
          >
            <a>{eachToner.name}</a>
          </li>
        </React.Fragment>
      );
    });
  };

  renderMoist = () => {
    return this.state.allMoisturizer.map((eachMoisturizer) => {
      return (
        <React.Fragment>
          <li
            onClick={() =>
              this.updateProductsDropDown("moisturizer", eachMoisturizer.name)
            }
          >
            <a>{eachMoisturizer.name}</a>
          </li>
        </React.Fragment>
      );
    });
  };

  renderSerum = () => {
    return this.state.allSerum.map((eachSerum) => {
      return (
        <React.Fragment>
          <li
            onClick={() => this.updateProductsDropDown("serum", eachSerum.name)}
          >
            <a>{eachSerum.name}</a>
          </li>
        </React.Fragment>
      );
    });
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  updateCheckBox = (ev) => {
    if (this.state.skin_type.includes(ev.target.value)) {
      let toRemove = this.state.skin_type.findIndex((eachSkinType) => {
        return eachSkinType === ev.target.value;
      });
      let cloned = [
        ...this.state.skin_type.slice(0, toRemove),
        ...this.state.skin_type.slice(toRemove + 1),
      ];
      this.setState({
        skin_type: cloned,
      });
    } else {
      let cloned = [...this.state.skin_type, ev.target.value];
      this.setState({
        skin_type: cloned,
      });
    }
  };

  updateDropdown = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    if (this.state.isLoaded) {
      return (
        <React.Fragment>
          <button
            type="button"
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Refresh Our Routines!
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Give meaning to the routine
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    {/* NAME */}
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Name
                      </label>
                      <input
                        onChange={this.updateFormField}
                        type="text"
                        name="name"
                        value={this.state.name}
                        className="form-control"
                        // id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text">
                        Please indicate your name
                      </div>
                    </div>
                    {/* EMAIL */}
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        onChange={this.updateFormField}
                        value={this.state.email}
                        type="text"
                        name="email"
                        className="form-control"
                        // id="exampleInputPassword1"
                      />
                    </div>
                    {/* Routine Title */}
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Title of routine
                      </label>
                      <input
                        onChange={this.updateFormField}
                        type="text"
                        value={this.state.title}
                        name="title"
                        className="form-control"
                        // id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text">
                        Please call it something
                      </div>
                    </div>
                    {/* Decription */}
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Description
                      </label>
                      <input
                        onChange={this.updateFormField}
                        value={this.state.description}
                        name="description"
                        type="text"
                        className="form-control"
                        // id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    {/* Timing */}
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Timing
                      </label>
                      <input
                        onChange={this.updateFormField}
                        value={this.state.timing}
                        type="text"
                        name="timing"
                        className="form-control"
                        // id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text">
                        Is this an AM or PM routine?
                      </div>
                    </div>
                    {/* Image URL */}
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Image URL
                      </label>
                      <input
                        onChange={this.updateFormField}
                        value={this.state.image}
                        name="image"
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text">
                        Include the URL link if you have an image for the
                        routine!
                      </div>
                    </div>
                    <h3>Skin types</h3>
                    <div className="checkboxMain">
                      <div className="mb-3 form-check">
                        <input
                          onChange={this.updateCheckBox}
                          value="dry"
                          checked={this.state.skin_type.includes("dry")}
                          type="checkbox"
                          className="form-check-input"
                          id="drySkin"
                        />
                        <label className="form-check-label" htmlFor="drySkin">
                          Dry
                        </label>
                      </div>
                      <div className="mb-3 form-check">
                        <input
                          onChange={this.updateCheckBox}
                          value="combi_D"
                          checked={this.state.skin_type.includes("combi_D")}
                          type="checkbox"
                          className="form-check-input"
                          id="combinationDry"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="combinationDry"
                        >
                          Combination(dry)
                        </label>
                      </div>
                      <div className="mb-3 form-check">
                        <input
                          onChange={this.updateCheckBox}
                          value="combi_O"
                          checked={this.state.skin_type.includes("combi_O")}
                          type="checkbox"
                          className="form-check-input"
                          id="combinationOily"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="combinationOily"
                        >
                          Combination(oily)
                        </label>
                      </div>
                      <div className="mb-3 form-check">
                        <input
                          onChange={this.updateCheckBox}
                          value="oily"
                          checked={this.state.skin_type.includes("oily")}
                          type="checkbox"
                          className="form-check-input"
                          id="oilySkin"
                        />
                        <label className="form-check-label" htmlFor="oilySkin">
                          Oily
                        </label>
                      </div>
                    </div>
                    <h3>Products</h3>
                    <div className="dropdown">
                      <button
                        className="btn btn-dark dropdown-toggle"
                        type="button"
                        id="cleanserDrop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Cleanser
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        {this.renderCleanser()}
                      </ul>
                      <button
                        className="btn btn-dark dropdown-toggle"
                        type="button"
                        id="cleanserDrop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Toner
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        {this.renderToner()}
                      </ul>
                      <button
                        className="btn btn-dark dropdown-toggle"
                        type="button"
                        id="cleanserDrop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Moisturizer
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        {this.renderMoist()}
                      </ul>
                      <button
                        className="btn btn-dark dropdown-toggle"
                        type="button"
                        id="cleanserDrop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Serum
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        {this.renderSerum()}
                      </ul>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={this.submitNewRoutine}
                    type="button"
                    className="btn btn-success"
                  >
                    Submit Routines
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        /> */}
        </React.Fragment>
      );
    }
  }
}
