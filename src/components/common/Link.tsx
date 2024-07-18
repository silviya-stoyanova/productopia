import React from "react";

interface ILink {
  key: string;
  href: string;
  name: string;
}

const Link: React.FC<ILink> = ({ key, href, name }) => {
  return (
    <li key={key}>
      <a href={href}>{name}</a>
    </li>
  );
};

export default Link;
