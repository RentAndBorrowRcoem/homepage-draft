import React from "react";
import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md"; // Import specific icons
import logo from '../assests/Rent and Borrow-logos_white.png';
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" style={{ height: "60px" }} />
      </div>
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" activeClassName="active">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/how-it-works" activeClassName="active">
            How It Works
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" activeClassName="active">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" activeClassName="active">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/submit-listings" className="submit-link">
            + Submit Listings
          </NavLink>
        </li>
      </ul>
      <div className="user-icons">
        <NavLink to="/cart">  
          <MdAccountCircle style={{ fill: "#65d6ad" }}/>
        </NavLink>
        </div>
      <div className="user-icons">
        <NavLink to="/cart">
          <TiShoppingCart style={{ fill: "#65d6ad" }} />
        </NavLink>
        
      </div>
    </nav>
  );
};

export default Navbar;

// yo
