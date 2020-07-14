import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ id, icon, name, url }) => {
  return (
    <div className="categories__item" data-testid="category">
      <Link
        to={`${url}/${id}`}
        className="categories__item__link"
      >
        <img src={icon} alt={name} />
        <span className="categories__item__title">{name}</span>
      </Link>
    </div>
  );
};

export default CategoryItem;
