import React from "react";

import "../assets/styles/components/banner.scss";

const Banner: React.FC = () => {
  return (
    <section className="banner container">
      <h1 className="banner__title">
        Discover the perfect items to meet your needs
      </h1>
      <p className="banner__description">
        Whether you're in search of the latest software solutions, cutting-edge
        mobile devices, or fashionable apparel, we have something for everyone.
      </p>
      <article className="banner__image-container">
        <img
          src="https://cdn.ozone.bg/media/description/9/2/920ac0319b1b581639ca6ca36cc8bdba4e389e3d_3000x2500_3047.jpg"
          alt="technologies"
        />
      </article>
    </section>
  );
};

export default Banner;
