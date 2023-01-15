import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

import { links } from "../../data";
import "./NavBar.css";

import Logo from "../../images/kratos-academia.png";

const NavBar = () => {
const [isNavShow, setIsNavShow] = useState(false);


  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo Kratos" onClick={() => setIsNavShow(false)}/>
        </Link>
        <ul className={`nav__links ${isNavShow ? 'show__nav': 'hide__nav'}`}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({isActive}) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShow(prev => !prev)}
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav__toggle-btn" onClick={() => setIsNavShow(prev => !prev)}>
          {
            isNavShow ? <MdOutlineClose /> : <GoThreeBars />
          }
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
