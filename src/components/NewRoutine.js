import React from "react";

export default function NewProduct(props) {
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
              Rejuvenate our routines!
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
