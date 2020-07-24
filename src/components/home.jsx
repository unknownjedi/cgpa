import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container home">
        <Link to="/cs">
          <div className="card home-card">
            <div className="card-color cs"></div>
            <div className="content">CS</div>
          </div>
        </Link>
        <Link to="/it">
          <div className="card home-card">
            <div className="card-color it"></div>
            <div className="content">IT</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Home;
