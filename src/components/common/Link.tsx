import React from "react";

import "../../styles/components/common/link.scss";

interface ILink {
  key: string;
  href: string;
  name: string;
}

const Link: React.FC<ILink> = ({ key, href, name }) => {
  return (
    <li key={key}>
      <a href={href} className="link">{name}</a>
    </li>
  );
};

export default Link;
