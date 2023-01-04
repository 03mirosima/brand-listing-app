import React from "react";
import DiscoverIcon from "../images/discover-icon.png";
import StarIcon from "../images/star-icon.png";
import SmallLogo from "../images/small-logo.png";

export const Navbar = () => {
  return (
    <div className="container container__navbar">
      <nav className="navbar">
        <a href="#" className="navbar__link navbar__link--discover-button">
          <img src={DiscoverIcon} />
          <span>KEŞFET</span>
        </a>
        <img className="navbar__link--logo" src={SmallLogo} />
        <a href="#" className="navbar__link navbar__link--wallet-button">
          <img src={StarIcon} />
          <span>DAHA CÜZDAN</span>
        </a>
      </nav>
    </div>
  );
};
