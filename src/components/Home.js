import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {

  return (
    <div className="home">
      <h1>Zoom Meeting SDK Sample React</h1>

      <div className="btn-group" role="group" aria-label="Basic example">
        <Link className="btn btn-primary ms-5" to="/create-meeting">
          Create Meeting
        </Link>
        <Link className="btn btn-primary ms-5" to="/meeting">
          Join Meeting
        </Link>
      </div>

    </div>
  );
};

export default Home;
