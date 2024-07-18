import React from "react";
import Link from "./common/Link";

interface INavigationLink {
  name: string;
  href: string;
}

const Navigation: React.FC = () => {
  const navLinks: INavigationLink[] = [
    {
      name: "Software",
      href: "#",
    },
    {
      name: "Mobile Devices",
      href: "#",
    },
    {
      name: "Fashion",
      href: "#",
    },
  ];

  return (
    <ul>
      {navLinks.map((data) => (
        <Link key={data.name} href={data.href} name={data.name} />
      ))}
    </ul>
  );
};

export default Navigation;
