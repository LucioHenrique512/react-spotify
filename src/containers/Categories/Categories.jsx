import React from "react";

import { Loading } from "../../components";

import CategoryItem from "./CategoryItem";

import { WelcomeBox } from "../../components";

import "./Categories.scss";

const Categories = ({ data, isLoading, url,user }) => {
  //console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <WelcomeBox name={user?.name} />
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
                url={url}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
