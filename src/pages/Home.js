import { Link } from "react-router-dom";
import React from "react";
import '../styles/Home.css'

function Home() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="row">
          <h2>Click Below to view Github Profile and Repo</h2>
        </div>
        <div className="row">
          <Link to="/profile" className="btn">
            View
          </Link>
        </div>
        <div className="row">
          <h6>by Egu Chinedu</h6>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h2>Click Below to view errorBoundary</h2>
        </div>
        <div className="row">
          <Link to="/error" className="btn">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
