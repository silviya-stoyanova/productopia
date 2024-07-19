import React from "react";

import "../../assets/styles/components/common/filters.scss";

interface FilterProps<T extends string> {
  items: T[];
  selectedItems: T[];
  onFilterChange: (item: T) => void;
}

const Filters = <T extends string>({
  items,
  selectedItems,
  onFilterChange,
}: FilterProps<T>): React.ReactElement => {
  return (
    <section className="filters">
      <p className="filters__title">Filters: </p>
      {items.map((item) => (
        <button
          key={item}
          className={
            selectedItems.includes(item)
              ? "filters__item filters__item--selected"
              : "filters__item"
          }
          onClick={(e) => {
            e.preventDefault();
            onFilterChange(item);
          }}
        >
          {item}
          {selectedItems.includes(item) && <i className="fas fa-close"></i>}
        </button>
      ))}
    </section>
  );
};

export default Filters;
