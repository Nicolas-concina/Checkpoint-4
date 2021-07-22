import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact activeClassName="nav-active" className="hover">
          <li>accueil</li>
        </NavLink>

        <li className="nav-portfolio">
          portfolio
          <ul className="nav-projects">
            <NavLink
              to="/projet-1"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Wheels on Mars</li>
            </NavLink>
            <NavLink
              to="/projet-2"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Multiscan</li>
            </NavLink>
            <NavLink
              to="/projet-3"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Le ForgeManger</li>
            </NavLink>
          </ul>
        </li>

        <NavLink to="/contact" activeClassName="nav-active" className="hover">
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
