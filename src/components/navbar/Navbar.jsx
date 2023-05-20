import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/Bee-Kreate.png";

const Menu = () => (
  <>
    <p>
      <a href="#home"></a>Home
    </p>
    <p>
      <a href="#about"></a>What is Bee-Kreate?
    </p>
    <p>
      <a href="#possibility"></a>Open AI
    </p>
    <p>
      <a href="#features"></a>Case Studies
    </p>
    <p>
      <a href="#blog"></a>Library
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="test__navbar">
      <div className="test__navbar-links">
        <div className="test__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="test__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="test__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="test__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="white"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="white"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="test__navbar-menu_container scale-up-center">
            <div className="test__navbar-menu_container-links">
              <Menu />
              <div className="test__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
