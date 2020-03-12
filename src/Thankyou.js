import React from "react";
import { Link } from "react-router-dom";

export default class Thankyou extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Thank You</h5>
            <Link to="/"> Back </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
