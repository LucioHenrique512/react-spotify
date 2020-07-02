import React from "react";

const CategoryItem = ({ id, icon, name, url }) => {
  return (
    <div className="categories__item" data-testid="category">
      <a className="categories__item__link" href={url}>
        <img src={icon} alt={name} />
        <span className="categories__item__title">{name}</span>
      </a>
    </div>
  );
};

export default CategoryItem;
