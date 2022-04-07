import React from "react";
import Button from "react-bootstrap/esm/Button";
export default function NewProduct(props) {
  return (
    <React.Fragment>
      <div className="container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Button variant="dark" className="m-2" size="sm">
              Add Products!
            </Button>
          </li>
          {/* <li className="nav-item">
              <button className="nav-link">Add New</button>
            </li> */}
        </ul>
      </div>
    </React.Fragment>
  );
}
