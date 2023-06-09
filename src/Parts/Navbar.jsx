import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-shrink bg-white shadow fw-bolder">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to='/'>
          Home
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <NavLink to="/dashboard/bot" className="nav-link text-secondary">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link text-secondary">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link text-secondary">Sign Up</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
