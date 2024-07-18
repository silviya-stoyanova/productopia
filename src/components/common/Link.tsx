import React from "react";

import "../../styles/components/common/link.scss";

interface ILink {
  href: string;
  name: string;
}

const Link: React.FC<ILink> = ({ href, name }) => {
  return (
    <li key={name}>
      <a href={href} className="link">
        {name}
      </a>
    </li>
  );
};

export default Link;
