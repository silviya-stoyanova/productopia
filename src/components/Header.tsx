import React from "react";
import Navigation from "./Navigation";

import "../assets/styles/components/header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Navigation />
    </header>
  );
};

export default Header;
