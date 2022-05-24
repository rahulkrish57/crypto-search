import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-heading">
      <h1>Oops! No Coin Found!</h1>
      <Link to="/">
        <button className="btn btn-secondary center">Back To Home</button>
      </Link>
    </div>
  );
}

export default Error;
