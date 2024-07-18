import React, { useState } from "react";
import Logo from "./Logo";
import Link from "./common/Link";

import "../styles/components/navigation.scss";

interface INavigationLink {
  name: string;
  href: string;
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: INavigationLink[] = [
    {
      name: "All",
      href: "/",
    },
    {
      name: "Software",
      href: "/software",
    },
    {
      name: "Mobile Devices",
      href: "/mobile-devices",
    },
    {
      name: "Fashion",
      href: "/fashion",
    },
  ];

  const toggleNavigation = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <nav className="navigation">
      <Logo />
      <label
        htmlFor="mobile-navigation"
        className={
          isOpen
            ? "navigation__burger-label navigation__burger-label--opened"
            : "navigation__burger-label"
        }
      >
        <span className="navigation__burger-label-item"></span>
        <span className="navigation__burger-label-item"></span>
        <span className="navigation__burger-label-item"></span>
      </label>
      <input
        hidden
        type="checkbox"
        id="mobile-navigation"
        onClick={toggleNavigation}
        className="navigation__burger-input"
      ></input>
      <ul className="navigation__list">
        {navLinks.map((data) => (
          <Link key={data.name} href={data.href} name={data.name} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
