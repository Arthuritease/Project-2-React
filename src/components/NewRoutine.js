import React from "react";
import Button from "react-bootstrap/esm/Button";
// import MyVerticallyCenteredModal from "react-bootstrap/esm/MyVerticallyCentred";
export default class NewRoutine extends React.Component {
  state = {
    name: "",
    email: "",
    title: "",
    description: "",
    timing: "",
    image: "",
    skin_type: [],
    products: [],
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  updateCheckBox = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
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
                    <label htmlFor="exampleInputEmail1" className="form-label">
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
                    <label htmlFor="exampleInputEmail1" className="form-label">
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
                    <label for="exampleInputEmail1" className="form-label">
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
                      Include the URL link if you have an image for the routine!
                    </div>
                  </div>
                  <h3>Skin types</h3>
                  <div className="checkboxMain">
                    <div className="mb-3 form-check">
                      <input
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
                        type="checkbox"
                        className="form-check-input"
                        id="oilySkin"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Oily
                      </label>
                    </div>
                  </div>
                  <h3>Products</h3>
                  <div class="dropdown">
                    <button
                      class="btn btn-primary dropdown-toggle"
                      type="button"
                      id="cleanserDrop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Cleanser
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          product#1
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          product#2
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          product#3
                        </a>
                      </li>
                    </ul>
                    <button
                      class="btn btn-primary dropdown-toggle"
                      type="button"
                      id="cleanserDrop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Toner
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          product#1
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          product#2
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          product#3
                        </a>
                      </li>
                    </ul>
                    <button
                      class="btn btn-primary dropdown-toggle"
                      type="button"
                      id="cleanserDrop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Moisturizer
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          product#1
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          product#2
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          product#3
                        </a>
                      </li>
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
                <button type="button" className="btn btn-primary">
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
