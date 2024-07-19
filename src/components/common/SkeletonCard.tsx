import React from "react";

import "../../assets/styles/components/common/skeleton-card.scss";

const SkeletonCard: React.FC = () => {
  return (
    <section className="skeleton-card">
      <header className="skeleton-card__header"></header>
      <footer className="skeleton-card__footer">
        <p className="skeleton-card__footer-text" />
        <p className="skeleton-card__footer-text" />
        <p className="skeleton-card__footer-button" />
      </footer>
    </section>
  );
};

export default SkeletonCard;
