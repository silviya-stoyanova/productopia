import React from "react";
import Navigation from "./Navigation";

import "../styles/components/header.scss";

const Header: React.FC = () => {
  return (
    <header className="header container">
      <Navigation />
    </header>
  );
};

export default Header;
