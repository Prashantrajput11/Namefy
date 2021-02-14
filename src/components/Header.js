import React from "react";
import Logo from "../components/myLogo.svg";

const Header = ({myTitle}) => {
  return (
    <div className="head-container">
      {/* <img
        className="head-image"
        src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
        alt="my header"
      ></img> */}

      <img src={Logo} className="head-image" alt="header-logo"></img>
      <h1 className="head-text">{myTitle}</h1>
    </div>
  );
};
export default Header;
