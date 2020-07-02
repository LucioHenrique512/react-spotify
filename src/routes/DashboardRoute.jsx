import React, { useEffect } from "react";
import Dashboard from "../containers/Dashboard";
import Categories from "../containers/Categories";
import api from "../modules/api";
import { useDispatch, useSelector } from "react-redux";
import { contentAction } from "../actions";

const DashboardRoute = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.content);

  useEffect(() => {
    api.get("/browse/categories").then((response) => {
      if (response) {
        const { categories } = response;
        //console.log(categories);
        dispatch(contentAction.updateCategoriesArray(categories.items));
      }
    });
  }, [dispatch]);

  const isLoading = categories.length === 0;

  return (
    <Dashboard>
      <Categories data={categories} isLoading={isLoading} />
    </Dashboard>
  );
};

export default DashboardRoute;
