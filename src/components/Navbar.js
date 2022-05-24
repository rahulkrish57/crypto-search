import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">
          <img src={logo} className="logo" alt="" />
        </Link>
      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" >About</Link>
          </li>
          <li>
            <Link to="/" className="nav-link disabled">Exchanges</Link>
          </li>
          <li>
            <Link to="/" className="nav-link disabled">NFT</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}
