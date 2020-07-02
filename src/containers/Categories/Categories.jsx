import React from "react";
import PropTypes from "prop-types";

import { Loading } from "../../components";

import CategoryItem from "./CategoryItem";

import { useSelector } from "react-redux";

import "./Categories.scss";

const Categories = ({ data, isLoading, url }) => {
  //console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="categories" data-testid="categories">
      <div className="container">
        <span className="categories__title">Categorias</span>
        <div className="categories__content">
          {data.map((item) => (
            <CategoryItem
              key={item.id}
              id={item.id}
              icon={item.icons[0].url}
              name={item.name}
              url={item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
