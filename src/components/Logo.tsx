import React from "react";

import logo from "../images/product-opia.svg";
import "../styles/components/logo.scss";

const Logo: React.FC = () => {
  return (
    <a href="#" className="logo">
      <img src={logo} alt="logo" className="logo__image" />
    </a>
  );
};

export default Logo;
