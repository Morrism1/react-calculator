/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Navbar
      fixed="top"
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && 'is-active'}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && 'is-active'}`}>
          <div className="navbar-start mr-auto">
            <NavLink className="navbar-item mr-2" activeClassName="is-active" to="/">
              Home
            </NavLink>

            <NavLink
              className="navbar-item mr-2"
              activeClassName="is-active"
              to="/calculator"
            >
              Calculator
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/quote"
            >
              Quote
            </NavLink>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
