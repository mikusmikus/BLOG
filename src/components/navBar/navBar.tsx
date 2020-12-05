import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
  return (
    <section className="navBar-wrapper">
      <div className="container ">
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-sm-offset-2">
            <NavLink to="/">
              <img
                src="https://svgsilh.com/svg/309113.svg"
                alt="home__image"
                className="navBar__image"
                width="50px"
              />
            </NavLink>
          </div>
          <div className="col-xs-10 col-sm-6">
            <div className="navBar">
              <NavLink to="/gallery" className="navBar__link">
                Gallery
              </NavLink>
              <NavLink to="/about" className="navBar__link">
                About
              </NavLink>
              <NavLink to="/login" className="navBar__link">
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
