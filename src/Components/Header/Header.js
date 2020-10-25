import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      // {HEADER NAVBAR}
      <nav className="Header-nav">
        <ul className="header-nav-ul">
          <li>
            <Link className="header-nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="header-nav-link" to="/works">works</Link>
          </li>
          <li>
            <Link className="header-nav-link" to="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
